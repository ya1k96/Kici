(function(){
    Vue.component('modal', {
        props: ['total','name', 'type', 'correctValue'],
        watch: {
            total: function() {
                this.incorrectValue = isNaN(parseInt(this.total)) && this.total.length > 0;
            }
        },
        methods: {            
            sendValues: function() {
                let verification = this.total > 0 && typeof parseInt(this.total) === 'number';
                if(verification) {
                    this.$emit('save', {name: this.name,total: this.total})
                }
            }
        },
        template: `<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!--
            Background overlay, show/hide based on modal state.
      
            Entering: "ease-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100"
              To: "opacity-0"
          -->
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      
          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      
          <!--
            Modal panel, show/hide based on modal state.
      
            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-full md:w-1/2">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="grid grid-colums-1 place-items-center">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10" v-bind:class="[(type == 'add') ? 'bg-green-100': 'bg-red-100']">
                  <!-- Heroicon name: outline/exclamation -->
                  <p class="font-medium text-xl" v-bind:class="[(type == 'add') ? 'text-green-500': 'text-red-500']">$</p> 
                </div>
              <p class="py-2 mb-1 mt-4 bg-red-100 rounded-full text-red-400 font-medium" v-if="incorrectValue">
                    <span v-if="incorrectValue && this.total != 0">
                        Asegurate de ingresar un valor correcto
                    </span>
                    <span v-if="incorrectValue && this.total == 0">
                        El valor debe ser mayor a 0
                    </span>
                  </p>
                
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    
                  </h3>                  
                  <div class="mt-2 mx-12">                    
                    <input class="border border-gray-200 px-4 rounded-full border-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent py-2 w-full" v-model="total" placeholder="$0.00"
                    >
                  </div>
                  <div class="mt-2 mx-12">                    
                    <input class="border border-gray-200 px-4 rounded-full border-transparent focus:outline-none focus:ring-2  focus:ring-gray-200 focus:border-transparent py-2 w-full" v-model="name" placeholder="Detalle">
                  
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button @click="sendValues" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" v-bind:class="[(type == 'add') ? 'bg-green-800 focus:ring-green-500 hover:bg-green-700': 'bg-red-800 focus:ring-red-500']">
                Guardar
              </button>
              <button @click="$emit('close')" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>`
    })

})()