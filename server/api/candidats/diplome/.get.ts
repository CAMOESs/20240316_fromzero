/** @format */

import prisma from "~/prisma/my_prisma";
import { definePrivateEventHandler } from "./../../../";
import { PrismaClient } from "@prisma/client";
import { dateformatFr_, dateformatFr_long } from "~/server/utils/date-utils";
import { readFileSync, existsSync } from "fs";
import QRCode from "qrcode";
import jwt from "jsonwebtoken";
export default definePrivateEventHandler(
  async (event, user) => {
    let query = getQuery(event);
    // console.log("query");
    // console.log(query);

    if (!Array.isArray(query.ids))
      return { error: "Veuillez selectionner d'abord les candidats." };

    try {
      let candidats = await prisma.candidat.findMany({
        where: {
          id: {
            in: query.ids.map((v) => Number(v)),
          },
          session_id: Number(query.session_id),
        },
      });
      let session = await prisma.session.findUnique({
        where: {
          id: Number(query.session_id),
        },
        include: {
          Month: true,
        },
      });
      if (!process.env.DIPLOME_KEY) {
        return { error: "KEY_NOT_FOUND" };
      }
      if(!session){
        return {error : "Aucune session"} 
      } 
      let candidats_with_qr = [];
      let token: string;
      for (const candidat of candidats) {
        token = jwt.sign(
          { id: candidat.id, month: session?.month, year: session?.year },
          process.env.DIPLOME_KEY
        );
        candidats_with_qr.push({
          ...candidat,
          qrcode: await QRCode.toDataURL(
            `${process.env.AUTH_HOSTNAME}/diplomes?ref=${token}`
          ),
        });
      }

      let signatures = ReadJson("server/json/signataire.json");

      let signatureHTML = signatures
        .map((signature: any, index: number) => {
          let filename = `server/public/images/signataire/signataire_${index}.${signature.exe}`;
          let imgTag;
          if (existsSync(filename)) {
            // Si le fichier existe, lisez son contenu
            const imageData = readFileSync(filename);
            const base64Image = Buffer.from(imageData).toString("base64");

            // Utilisez les données de l'image dans l'attribut src de l'élément img
            imgTag = `<img src="data:image/png;base64,${base64Image}" alt="signature_${index}" />`;
          } else {
            imgTag = `<img src="" alt="signature_${index}" />`;
          }
          return signature.showed == "true"
            ? ` <div class="footer-item">
                  <div class="text-center text-bold">
                    ${signature.title_of_sign}
                  </div>
                  <div style="display : flex; justify-content: center">
                    ${imgTag}
                    <!-- <img src="${process.env.AUTH_HOSTNAME}/api/showphoto?t=signataire_${index}.${signature.exe}" alt="signature" /> -->
                  </div>
                </div>
                
       `
            : "";
        })
        .join("")


        let signatureFullname = signatures
        .map((signature: any, index: number) => {
          
          let imgTag;
          
          return signature.showed == "true"
            ? ` <div class="footer-item">
                  <div class="text-center text-bold">
                    ${signature.full_name}
                  </div>
                </div>
       `
            : "";
        })
        .join("")
      // console.log(signatures);

      /*   let signatures = [
        {
          title: "Président de la Chambre des métiers de l'artisana du BENIN",
          filename: "signature-1.png",
        },
        {
          title: "Directeur des examens et concours",
          filename: "signature-2.png",
        },
        {
          title:
            "Directrice des enseignements secondaire, techique et de la formation professionnelle",
          filename: "signature-3.png",
        },
      ]; */
      /*  console.log(
        `src="${
          process.env.AUTH_HOSTNAME
        }/api/showphoto?t=signataire_${1}.${"png"}`
      ); */

      let filename = "filename";
      event.node.res.setHeader("Content-Type", "application/octet-stream");
      event.node.res.setHeader(
        "Content-Disposition",
        "attachment"
      );
      event.node.res.setHeader(
        "filename",
        "diplome.pdf"
      );
      let doc = await generatePDF(
        `
<html>
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .text-bold {
        font-weight: bold;
    }
    .text-center {
        text-align: center;
    }
    .body {
        background: url("${
          process.env.AUTH_HOSTNAME
        }/PDF/Images/diplomes/20240223_bg_diplome_cqm.png") no-repeat center center;
        height: 95vh;
        break-after: page;
        font-family:  sans-serif;
        position : relative;
    }
    h1{
      font-size : 45px
    } 
    h2{
      font-size : 20px
    } 
    .content {
        width: 75%;
        margin: auto;
        padding-top: 30px;
    }
    .header {
        display: flex;
        text-transform: uppercase;
    }
    .header-item-1{
      flex : 1
    } 
    .header-item-2{
      flex : 3
    } 
    .header-item-3{
      flex : 1;
      display: flex;
      justify-content: end;
    } 
    .title {
      text-transform: uppercase;
  }
    .photo {
        width: 3cm;
        height: 3.5cm;
        border: solid black 1px;
        display: flex;
        justify-content: center;
        margin-left : 0.5cm;
        align-items: center;
    }
    .header-first-iem-1 {
        display: flex;
    }
    .drapeau {
        width: 70px;
        height : 50px
    }
    .trait  {
      width: 150px;
    }
    .benin {
        text-align: center;
    }
    .benin * {
          margin : 10px auto;
          padding : 10px auto;
      }

    .benin hr {
        width: 150px;
        border: none;
        border-top: 3px solid black;
        height: 5px;
    }

    .header-first-iem-2 {
        text-align: center;
    }
    .header-first-iem-2 * {
      margin : 3px auto
    } 
    .photo {
      width: 2.5cm;
      height: 2.7cm;
      border: solid black 1px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      position : absolute;
      right : 130px;
      top : 120px;
      text-transform : uppercase;
  }
  .photo-qrcode{
    width: 2.5cm;
      height: 2.7cm;
      display: flex;
      justify-content: center;
      align-items: center;
      position : absolute;
      left : 130px;
      top : 110px;
      text-transform : uppercase;
      
  } 
  .img-qrcode {
     width: 2.5cm;
  } 
  /*  margin-left : 0.5cm; */
    .main{
      font-size : 18px;
      line-height: 30px;
    } 
    .footer {
        display: flex;
        align-content: space-between;
        margin: 10px 0px 0px 0px;
    }
    .footer-item {
        flex: 1;
        margin: 0px 10px;
        height : 100%;
    }
    .footer-item img {
        height: 70px;
        margin : auto;
    }
  </style>
</head>

<body>
  ${candidats_with_qr.map(
    (candidat, index) => `
  <div class="body">
  <div class="photo" >
  <div>Photo</div>
</div>
<div class="photo-qrcode" >
<img src="${candidat.qrcode}" alt="qr_code"  class="img-qrcode"/>
    
</div>
  <div class="content">

    <div class="header">
      <div class="header-item-1">
        <img src="${
          process.env.AUTH_HOSTNAME
        }/PDF/Images/diplomes/drapeaux-benin.png" alt="Drapeau benin" class="drapeau" />
      </div>
      <div class="header-item-2 ">
        <div class="benin">
          <p class="text-bold" style="color : #ef412a;" >République du Bénin</p>
          <p>
            Ministère des enseignements secondaire, <br />
            technique et de la formation professionnelle
          </p>
          <img src="${
            process.env.AUTH_HOSTNAME
          }/PDF/Images/diplomes/trait.png" alt="amoirie" class="trait" />
        </div>
      </div>
      <div class="header-item-3">
      
      <img src="${
        process.env.AUTH_HOSTNAME
      }/PDF/Images/diplomes/armoiries.png" alt="Drapeau benin" class="drapeau" /> 
      </div>
    </div>
    <div class="title">
    <div class="header-first-iem-2">
      <h1 style="color : #15548d; margin-top : 8px" class="text-bold">Attestation de diplôme</h1>
      <!--#EXAM  -->
      <h2 style="color : #ee3219;">Du certificat de qualification aux métiers (CQM)</h2>
  </div>
    </div>
    <div class="main">
      Le Ministre des enseignements secondaire, technique et de la formation
      professionnelle, <br />
      Vu le procès-verbal de la délibération de l'examen du CQM en date du
      <span class="text-bold">${dateformatFr_long(session?.date_of_pv)}</span>, <br />
      Certifie que ${candidat.sex == "M" ? "Monsieur" : "Madame"}<span class="text-bold">
      <span style="text-transform: capitalize">${candidat.firstname}</span>
      <span style="text-transform: uppercase">${candidat.lastname}</span>
      </span>
      <br />
      ${candidat.sex == "M" ? "Né" : "Née"} le <span class="text-bold">${dateformatFr_long(
        candidat.date_of_birth
      )}</span> à
      <span class="text-bold">${candidat.place_of_birth}</span> <br />
      A suivi avec succès l'examen du certificat de qualification aux
      métiers (CQM) <br />
      Métier : <span class="text-bold">${candidat.metier}</span> <br />
      Session de <span class="text-bold " style="text-transform: lowercase;">  ${session?.Month.name} ${
      session?.year
    }</span> <br />
      Conformément à la décision : 
      <span class="text-bold">
        ${session?.reference} du ${dateformatFr_(session?.date_of_pv)}
      </span>
      <br />
      En foi de quoi, la présente attestation de diplôme lui est délivrée
      pour servir et valoir ce que de droit.
    </div>
    <div>
      <div class="footer">
        ${signatureHTML}
      </div>
      <div class="footer">
        ${signatureFullname}
      </div>
    
    </div>
  </div>
</div>
  `
  )}
</body>
</html>
`,
        {
          landscap: true,
          margin: {
            top: "0px",
            bottom: "0px",
            right: "0px",
            left: "0px",
          },
          displayHeaderFooter: false,
        }
      );
      event.node.res.write(doc);
      return event.node.res
        .end
        // doc
        ();
    } catch (error) {
      console.error(error);
      // http://10.10.2.251:5070/api/showphoto?t=signataire_2.png
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les diplômes des candidats"],
  }
);
