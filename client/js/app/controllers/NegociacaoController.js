class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }


    adiciona(event){

        event.preventDefault();

        let helper = new DateHelper();



        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

    }
    _criaNegociacao(){
        return new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    _limpaFormulario(){
        this._inputData = "";
        this._inputQuantidade = 1;
        this._inputValor = 0.0;

        this._inputData.focus();
    }
}