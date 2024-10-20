function toggleMode() {
    const html = document.documentElement
   html.classList.toggle('light')

   // tag img
   const img = document.querySelector('#profile img')
   
   // substituir a Imagem
    if(html.classList.contains('light')) {
        // Acionar a Imagem light no Light Mode
        img.setAttribute('src',' ./assets/avatar-light.png')
        img.setAttribute('alt',' Foto de Mayk Brito com fundo degradê azul-roxo')
   }

   else {
        // Manter a Imagem normal no Default Mode
        img.setAttribute('src',' ./assets/avatar.png')
        img.setAttribute('alt',' Foto de Mayk Brito com fundo amarelo')
   }




  

   
}