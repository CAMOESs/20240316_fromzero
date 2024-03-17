<template>
  <div>
    <!-- {{ group_by_year }} -->
    <div v-if="group_by_year.length">
      <v-card
        elevation="0"
        v-for="(item, index) in group_by_year"

        :key="index"
      >
        <v-card-title>{{ item.academic_year }} </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              v-for="(story, index) in item.stories"
              :key="index"
              cols="12"
              md="4"

            >
              <!-- #1b3a4c -->

              <v-sheet
                style="border: 1px grey solid; border-radius: 10px"
                :class="`${story.new ? 'bg-green-lighten-1 px-3' : 'px-3'}`"
              >
                <span class="font-weight-black">Établissement : </span>
                {{
                  story.School && story.School.acronym
                    ? story.School.acronym
                    : ""
                }}    
                (Com :{{ story.School && story.School.Municipality ? story.School.Municipality.name : '-' }} )
                <br />

                <span class="font-weight-black">Fonction : </span>
                {{
                  story.PersonalFunction && story.PersonalFunction.acronym
                    ? story.PersonalFunction.acronym
                    : ""
                }}
                <br />

                <span class="font-weight-black">Statut : </span>
                {{
                  story.PersonalStatus && story.PersonalStatus.name
                    ? story.PersonalStatus.name
                    : ""
                }}
                <br />

                <span class="font-weight-black">Type : </span>
                {{
                  story.PersonalType && story.PersonalType.name
                    ? story.PersonalType.name
                    : ""
                }}
                <br />
                <span class="font-weight-black">Grade : </span>
                {{ agent_grade(story) }} <br />
                <span class="font-weight-black">Disciplines : </span>
                <span class="grey">{{
                  disciplines_list(story.DisciplinePersonalStory)
                }}</span>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
    <div v-else-if="group_by_year.length == 0">Aucun</div>
  </div>
</template>

<script setup>
let props = defineProps({
  stories: Object,
});

let group_by_year = computed(() => {
  if (!props.stories) return [];

  // console.log(props.stories[0]);
  let new_tab = [];

  let years_id = new Set(props.stories.map((v) => v.year_id));
  let elmt = [];
  for (const year_id of [...years_id]) {
    elmt = props.stories.filter((value) => value.year_id == year_id);
    new_tab.push({
      year_id: year_id,
      academic_year: elmt[0].Year.academic_year,
      stories: elmt,
    });
  }
  // return [...years_id];
  return new_tab;
});
function disciplines_list(tab) {
  let a = [];
  for (const discipline of tab) {
    if (discipline.Discipline && discipline.Discipline.name)
      a.push(discipline.Discipline.name);
  }
  if (a.length == 0) a = ["-"];
  let list = new Set(a);
  return [...list].join(", ");
}
function agent_grade(data) {
  let categorie =
    data.GradeCategory && data.GradeCategory.name
      ? data.GradeCategory.name
      : "";

  let echelle =
    data.GradeEchelle && data.GradeEchelle.number
      ? data.GradeEchelle.number
      : "";
  let echelon =
    data.GradeEchelon && data.GradeEchelon.number
      ? data.GradeEchelon.number
      : "";
  return categorie + echelle + "_" + echelon;
}
</script>

<style></style>
