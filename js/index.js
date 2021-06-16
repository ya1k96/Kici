(function() {
    let id = new Date().getTime();
    let listas = [
        {name: 'Mercado Pago', total: -250, id: id+1},
        {name: 'Mercado Pago', total: 250, id: id+2},
        {name: 'Mercado Pago', total: 250, id: id+3},
        {name: 'Mercado Pago', total: 250, id: id+4},
    ];
    localStorage.setItem('listItems', JSON.stringify(listas));
    
    let app = new Vue({
        el: '#app',
        data: {
            lista: [],
            saldo: 0,
            loaded: false
        },
        computed: {
            miSaldo: function() {
                let saldo = 0;
                if(this.lista.length > 0) {
                    this.lista.forEach(item => {
                        saldo = saldo + item.total;
                    })
                }
                return saldo;
            }
        },
        methods: {
            getList() {
                this.loaded = true;
                if(localStorage.getItem('listItems')) {
                    this.lista = JSON.parse(localStorage.getItem('listItems'));
                }
            },
            saveItem(item) {
                if(localStorage.getItem('listItems')) {
                    localStorage.setItem('listItems', JSON.stringify([]))
                }

                this.lista.push(item);
                localStorage.setItem('listItems', JSON.stringify(this.lista))
            }
        }
    });
    app.getList();
})()