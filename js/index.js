
    let id = new Date().getTime();

    
    let app = new Vue({
        el: '#app',
        data: {
            lista: [],
            saldo: 0,
            loaded: false,
            showModal: false,
            showModalItem: false,
            type: 'add',
            selectItem: null
        },
        methods: {      
            mosInfo: function(event) {
                console.log(event);
            },                  
            toggleModalGasto: function() {
                this.showModal = !this.showModal;
                this.type = 'susc';
            },         
            toggleModalIngreso: function() {
                this.showModal = !this.showModal;
                this.type = 'add';
            },         
            getList() {
                this.loaded = true;
                if(localStorage.getItem('listItems')) {
                    this.lista = JSON.parse(localStorage.getItem('listItems'));
                }
                if(this.lista.length > 0) {
                    this.lista.forEach(item => {
                        this.saldo = this.saldo + item.total;
                    })
                }
            },
            saveItem(item) {
                this.showModal = !this.showModal;
                if(!localStorage.getItem('listItems')) {
                    localStorage.setItem('listItems', JSON.stringify([]))
                }
                let total = parseInt(item.total);
                total = (this.type == 'add') ? total: -total
                this.saldo = this.saldo + total;
                let date = new Date();
                let newItem = {
                    total,
                    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
                    id: date.getTime(),
                    date 
                };
                this.lista.push(newItem);
                localStorage.setItem('listItems', JSON.stringify(this.lista))
            },
            showInfo($event) {
                console.log($event.target)
            }
        }
    });
    app.getList();