import { d as definePrivateEventHandler, g as getQuery, p as prisma, R as ReadJson } from './.get.mjs';
import puppeteer from 'puppeteer';
import { existsSync, readFileSync } from 'fs';
import 'node:http';
import 'node:https';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const months = [
  "janvier",
  "f\xE9vrier",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "ao\xFBt",
  "septembre",
  "octobre",
  "novembre",
  "d\xE9cembre"
];
function dateformatFr_(date) {
  console.log("typeof date");
  console.log(typeof date);
  if (!date)
    return null;
  return [
    String(date.getDate()).padStart(2, "0"),
    String(date.getMonth()).padStart(2, "0"),
    String(date.getFullYear()).padStart(4, "0")
  ].join("/");
}
function dateformatFr_long(date) {
  console.log("typeof date");
  console.log(typeof date);
  if (!date)
    return null;
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${day} ${months[month]} ${year}`;
}

function defaultFooter(date) {
  return `<div style="border-top: solid 1px #bbb; width: 100%; font-size: 9px;
  padding: 0px;padding-bottom: 5px; color: #bbb; position: relative;">
  <div style="position: absolute; left: 15px; top: 5px;"> ${date.toISOString()} </div>
      <div style="position: absolute; left:50%; top: 5px; margin-left:-20px;"> <span>Realized by <a style="text-decoration: none ; color :#00838f; " href="https://ticsmaster.bj/">ticsmaster</a></span></div>
      <div style="position: absolute; right: 15px; top: 5px;"><strong>Page <span class="pageNumber"></span></strong> sur <span class="totalPages"></span></div>
  </div>
  `;
}
const defaultMargin = {
  left: "30px",
  right: "30px",
  bottom: "40px",
  top: "30px"
};
async function generatePDF(html, options) {
  var _a, _b;
  try {
    const pdf_option = {
      format: (options == null ? void 0 : options.format) || "A4",
      path: (options == null ? void 0 : options.path) || void 0,
      landscape: options == null ? void 0 : options.landscap,
      displayHeaderFooter: (options == null ? void 0 : options.displayHeaderFooter) == void 0 ? true : false,
      // displayHeaderFooter: true,
      headerTemplate: (options == null ? void 0 : options.headerTemplate) || "",
      footerTemplate: (options == null ? void 0 : options.footerTemplate) ? `<div style="font-size : 30px; background : red;  width: 100%; " >${options == null ? void 0 : options.footerTemplate}</div>` : defaultFooter(/* @__PURE__ */ new Date()),
      margin: (options == null ? void 0 : options.margin) || defaultMargin,
      printBackground: true
    };
    const browser = await puppeteer.launch({
      headless: "new",
      args: [
        "--no-sandbox"
        /* ,'--disable-dev-shm-usage' */
      ]
    });
    const page = await browser.newPage();
    await page.setContent(html);
    if ((_a = options == null ? void 0 : options.watermark) == null ? void 0 : _a.status) {
      await page.evaluate((_b = options == null ? void 0 : options.watermark) == null ? void 0 : _b.fun);
    }
    let file = await page.pdf(pdf_option);
    console.log("ceci est le document generer", file);
    await browser.close();
    return (options == null ? void 0 : options.path) ? void 0 : file;
  } catch (error) {
    console.log(error);
    return { error };
  }
}

const diplome_get = definePrivateEventHandler(
  async (event, user) => {
    let query = getQuery(event);
    console.log("query");
    console.log(query);
    if (!Array.isArray(query.ids))
      return { error: "Veuillez selectionner d'abord les candidats." };
    try {
      let candidats = await prisma.candidat.findMany({
        where: {
          id: {
            in: query.ids.map((v) => Number(v))
          },
          session_id: Number(query.session_id)
        }
      });
      let session = await prisma.session.findUnique({
        where: {
          id: Number(query.session_id)
        },
        include: {
          Month: true
        }
      });
      let signatures = ReadJson("server/json/signataire.json");
      console.log(signatures);
      console.log(
        `src="${process.env.AUTH_HOSTNAME}/api/showphoto?t=signataire_${1}.${"png"}`
      );
      let filename = "filename";
      event.node.res.setHeader("Content-Type", "application/octet-stream");
      event.node.res.setHeader(
        "Content-Disposition",
        "attachment; filename=diplome.pdf"
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
        background: url("${process.env.AUTH_HOSTNAME}/PDF/Images/diplomes/20240223_bg_diplome_cqm.png") no-repeat center center;
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
    }
    .footer-item img {
        height: 70px;
        margin : auto;
    }
  </style>
</head>

<body>
  ${candidats.map(
          (candidat, index) => `
  <div class="body">
  <div class="photo" >
  <div>Photo</div>
</div>
  <div class="content">



    <div class="header">
      <div class="header-item-1">
        <img src="${process.env.AUTH_HOSTNAME}/PDF/Images/diplomes/drapeaux-benin.png" alt="Drapeau benin" class="drapeau" />
      </div>
      <div class="header-item-2 ">
        <div class="benin">
          <p class="text-bold" style="color : #ef412a;" >R\xE9publique du B\xE9nin</p>
          <p>
            Ministere des enseignement secondaire <br />
            technique et de la formation professionnelle
          </p>
          <img src="${process.env.AUTH_HOSTNAME}/PDF/Images/diplomes/trait.png" alt="amoirie" class="trait" />
        </div>
      </div>
      <div class="header-item-3">
      
      <img src="${process.env.AUTH_HOSTNAME}/PDF/Images/diplomes/armoiries.png" alt="Drapeau benin" class="drapeau" /> 
      </div>
    </div>
    <div class="title">
    <div class="header-first-iem-2">
      <h1 style="color : #15548d; margin-top : 8px" class="text-bold">Attestation du dipl\xF4me</h1>
      <h2 style="color : #ee3219;">Du certificat de qualification aux m\xE9tiers (CQM)</h2>
  </div>
    </div>
    <div class="main">
      Le Minist\xE8re des enseignement secondaire, technique et de la formation
      professionnelle <br />
      vue le Proc\xE8s-verbal de la d\xE9lib\xE9ration de l'examen du CQM en date du
      <span class="text-bold">19 f\xE9vrier 2024</span> <br />
      Certifie que ${candidat.sex == "M" ? "M." : "Mme"}<span class="text-bold">
      <span style="text-transform: capitalize">${candidat.firstname}</span>
      <span style="text-transform: uppercase">${candidat.lastname}</span>
      </span>
      <br />
      N\xE9(e) le <span class="text-bold">${dateformatFr_long(
            candidat.date_of_birth
          )}</span> \xE0
      <span class="text-bold">${candidat.place_of_birth}</span> <br />
      a suivi avec succ\xE8s l'exament du certificat de qualification au
      m\xE9tiers (CQM) <br />
      M\xE9tier : <span class="text-bold">${candidat.metier}</span> <br />
      Session de <span class="text-bold">${session == null ? void 0 : session.Month.name} ${session == null ? void 0 : session.year}</span> <br />
      conformement \xE0 la d\xE9cision : 
      <span class="text-bold">
        ${session == null ? void 0 : session.reference} du ${dateformatFr_(session == null ? void 0 : session.date_of_pv)}
      </span>
      <br />
      En foi de quoi, la presente Attestation du dipl\xF4me lui est d\xE9livr\xE9
      pour servir et valoir ce que de droit.
    </div>
    <div class="footer">
      ${signatures.map((signature, index2) => {
            let filename2 = `server/public/images/signataire/signataire_${index2}.${signature.exe}`;
            let imgTag;
            if (existsSync(filename2)) {
              const imageData = readFileSync(filename2);
              const base64Image = Buffer.from(imageData).toString("base64");
              imgTag = `<img src="data:image/png;base64,${base64Image}" alt="signature_${index2}" />`;
            } else {
              imgTag = `<img src="" alt="signature_${index2}" />`;
            }
            return signature.showed == "true" ? ` <div class="footer-item">
       <div class="text-center text-bold">
         ${signature.title_of_sign}
       </div>
       <div style="display : flex; justify-content: center">
       
       ${imgTag}
      <!-- <img src="${process.env.AUTH_HOSTNAME}/api/showphoto?t=signataire_${index2}.${signature.exe}" alt="signature" /> -->
     </div>
     </div>
       ` : "";
          }).join("")}
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
            left: "0px"
          },
          displayHeaderFooter: false
        }
      );
      event.node.res.write(doc);
      return event.node.res.end(
        // doc
      );
    } catch (error) {
      console.error(error);
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les dipl\xF4mes des candidats"]
  }
);

export { diplome_get as default };
//# sourceMappingURL=diplome.get.mjs.map
