function openModal(){
    const modal = document.getElementById('modal-container')
    modal.classList.add('open')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'fechar' || e.target.id == "modal-container"){
            modal.classList.remove('open')
            localStorage.fechaModal = 'modal-container'
        }
    })
}