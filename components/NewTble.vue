<template>
    {{ selectedRows1 }} <br>
    <!-- {{ selectedRows }} <br> -->
    {{ tmplast }} 
    <div class="va-table-responsive ">
        <!-- <table class="va-table " style="width: 100% !important;"> -->
        <table class="va-table " style="width: 100% !important;">
            <thead>
                <tr>
                    <th style="width: 50px;" v-show="check">
                        <v-checkbox class="check" v-model="selectAll" @change="toggleAll" :indeterminate="isIndeterminate"
                            color="#fff" :disabled="tableData.length <= 0 ? true : false"></v-checkbox>
                    </th>


                    <th v-for="(it, ite) in tableHeaders " :key="ite"
                        style="text-align: center;height: 50px; font-size: 13px;">{{ it.text }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in tableData" :key="index" class="alignment" v-if="tableData.length > 0">
                    <td v-show="check">
                        <v-checkbox class="check" type="checkbox" :value="item" v-model="selectedRows"  @click="open(item)"
                            color="#01579B"></v-checkbox>

                    </td>
                    <td v-for="(ite, ind) in tab" :key="ind">{{ item[ite] }}</td>

                </tr>

                <tr class=" " v-else>

                    <td :colspan='`${colapse + 1}`' style="text-align: center !important;">
                        {{ noDataMessage }}
                    </td>


                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
let data = defineProps({
    tableHeaders: Array,
    tableData: Array,
    theFilter: Array,
    noDataMessage: String,
    tab: Array,
    sender: Number,
    selectedItems: Number,
    check: Boolean,
})
// console.log(data.tableData)
let boug = () => {
    // console.log("lolo")
}
let isShiftPressed = ref(false);
let leftMouseClick = ref(false)
let selectedRows1 = ref([])
let tmp0 = ref([])
let tmplast
let selectedRows = ref([])

function open(t){
    // console.log(t)
    if(!selectedRows1.value.includes(t)){
        selectedRows1.value.push(t)
        tmp0.value.push(t)
    }  
    // console.log(leftMouseClick.value && isShiftPressed.value,'living')
    // console.log(leftMouseClick.value,'leftMouseClick.value ')
    // console.log(isShiftPressed.value,'isShiftPressed.value')
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    
    // console.log(selectedRows1.value)
    // console.log(selectedRows.value,"propos")
    // console.log(leftMouseClick.value && isShiftPressed.value,'dehors',selectedRows1.value)

    if (leftMouseClick.value && isShiftPressed.value && selectedRows1.value.length > 1) {
    // console.log(leftMouseClick.value && isShiftPressed.value,'dedans')

        let last = selectedRows1.value[selectedRows1.value.length - 1]
          tmplast = tmp0.value[selectedRows1.value.length - 1]
        let prelast = selectedRows1.value[selectedRows1.value.length - 2]
        // console.log(last, prelast)

        let indelast = data.tableData.indexOf(last)
        let indeprelast = data.tableData.indexOf(prelast)

        let compare = indelast > indeprelast
        let nbrgd
        let nbrpt
        if (compare == true) {
            nbrgd = indelast
            nbrpt = indeprelast
            // console.log(nbrgd,nbrpt,'nbr 1')
        } else {
            nbrgd = indeprelast
            nbrpt = indelast
            // console.log(nbrgd,nbrpt,'nbr 3')
        }
        data.tableData.forEach(e => {
            // console.log(nbrgd,nbrpt,'nbr')
            if (data.tableData.indexOf(e) < nbrgd && data.tableData.indexOf(e) > nbrpt && !selectedRows1.value.includes(e)) {
                // console.log(e,'les e')
                selectedRows.value.push(e)
                if (selectedRows1.value.length == data.tableData.length) {
                    selectAll = true
                }
            }
        })

        leftMouseClick.value = false
        isShiftPressed.value = false
        selectedRows1.value = [] 
        // beforeDestroy()

    }
    // window.addEventListener('mouseup', handleMouseUp);
    // window.addEventListener('keyup', handleKeyUp);
    // selectedRows.value.push(tmplast)
    // console.log(selectedRows.value,'...')
  } 

function handleKeyDown(event) {
    if (event.key === 'Shift' ) { 
        isShiftPressed.value = true;
    }
}
function handleKeyUp(event) {
    if (event.key === 'Shift') {
        isShiftPressed.value = false;
    }
}

function handleMouseDown(event) {
    if (event.button === 0) { // 0 signifie le bouton gauche de la souris
        leftMouseClick.value = true;

    } 
    // open()

}

function handleMouseUp(event) {
    if (event.button === 0) {
        leftMouseClick.value = false;
    }
}

function beforeDestroy() {
    // Assurez-vous de supprimer les écouteurs d'événements lorsque le composant est détruit
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
    window.removeEventListener('mousedown', handleMouseDown);
    window.removeEventListener('mouseup', handleMouseUp);
  }

  

onMounted(() => {
    // console.log('Le composant a été monté.');
    // window.addEventListener('keydown', handleKeyDown);
    // window.addEventListener('mousedown', handleMouseDown);
     
    // window.addEventListener('mouseup', handleMouseUp);
    // window.addEventListener('keyup', handleKeyUp);
    // console.log(leftMouseClick.value && isShiftPressed.value,'DGFDSGF')
    // if(leftMouseClick.value && isShiftPressed.value ) {
    //     console.log('pouul')
    // }

    // beforeDestroy()

});

let t = 2
let send = () => {
    data.sender(selectedRows.value)
}
let colapse = data.tableHeaders.length

let selectAll = false
let toggleAll = (event) => {
    if (selectAll) {
        selectedRows.value = data.tableData.map(item => (item))
        // window.addEventListener('keydown', handleKeyDown);
        // data.sender(selectedRows.value)
    } else {
        selectedRows.value = []

        // data.sender(selectedRows.value)
        // console.log(selectAll)


    }
}

let toggleItem = (item) => {
    const index = selectedRows.value.indexOf(item.id);
    if (index > -1) {
        selectedRows.value.splice(index, 1);
    } else {
        selectedRows.value.push(item.id);
    }
}

let updateSelectAll = (newSelected) => {
    const allSelected = data.tableData.every(item => item.selected);
    const someSelected = data.tableData.some(item => item.selected);
    selectAll = data.tableData.length > 0 && allSelected;
    if (!newSelected) {
        selectAll = someSelected;
    }
}
let color = ''
let isIndeterminate = computed(() => {
    // const selectedCount = itemse.filter(item => item.selected).length;
    const selectedCount = selectedRows.value.length;
    color = 'red'
    return selectedCount > 0 && selectedCount < data.tableData.length;
})

watch(selectedRows, (newSelectedRows) => {
    const allSelected = data.tableData.length > 0 && newSelectedRows.length === data.tableData.length;
    const someSelected = newSelectedRows.length > 0 && newSelectedRows.length < data.tableData.length;
    selectAll = allSelected;
    if (!someSelected) {
        selectAll = allSelected;
    }
})

</script>


<style lang="scss">
thead {
    background: #1b3a4c !important;
    color: #fff !important;

    .va-checkbox {
        border: #fff !important;
    }
}

.va-checkbox {
    background-color: #ffffff !important;
}

.entete {
    width: 90%;
    z-index: 1;
    transform: translateY(25px);
}

// .va-data-table__table-th va-data-table__table-cell-select


.va-data-table {
    margin-top: 20px !important;
}

.top {
    transform: translateX(-185px);
}

input[type="checkbox"]:indeterminate {
    background-color: #ff0000 !important;
    /* Remplacez cette valeur par la couleur souhaitée */
}

.alignment:hover {
    // padding: 0 !important;
    color: #1b3a4c;
    background-color: #e3e2e2 !important;
}

.check {
    margin: 0px 0 0 0 !important;
    padding: 0 !important;
    height: 15px !important;
    transform: translateY(-20px);
    font-size: 15px;
    align-items: center;
    justify-items: center;
    border-bottom: none !important;
}

.va-table th {
    border-bottom: none;
}

.tdcheck {
    transform: translateY(1px);
}

.actived {
    color: #ff0000 !important;
}

table,
th,
td {
    border: 1px solid gray;
    border-collapse: collapse;
}

.va-table td {
    vertical-align: middle !important;
}

.whitt {
    color: #fff;
}

.grasy {
    font-weight: bold !important;
}

.colors {
    color: #c6bebe !important;
}

// input[type="checkbox"]{
//   height: 25px !important;
//   width: 25px !important;
// }</style>