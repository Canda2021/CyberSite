let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click' , ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click' , ()=>{
    menu.classList.remove('abrir-menu')
})

//EFEITO ScrollReveal
window.revelar = ScrollReveal({reset:true})
//TOPO DO SITE
revelar.reveal ('.efeito-txt-topo', 
{
    duration:4000,
    distance:'90px',
})
revelar.reveal ('.efeito-img-topo', 
{
    duration:4000,
    distance:'90px',
    delay:500
})

// EFEITO-OUTROS SERVIÇOS
revelar.reveal('.efeito-servicos1',
{
    duration:2000,
    distance:'90px',
    delay:800,
    origin:'left'
})
revelar.reveal('.efeito-servicos2',
{
    durantion:4000,
    distance:'90px',
    delay:900,
    origin:'left'
})
revelar.reveal('.efeito-servicos3',
{
    durantion:6000,
    distance:'90px',
    delay:1000,
    origin:'left'
})
revelar.reveal('.titulo-servico',
{
    durantion:2000,
    distance:'90px',
    delay:800,
    origin:'right'
})

//EFEITO-TRABALHO CIENTIFICO
revelar.reveal('.trabalho-cientifico1',
{
    durantion:2000,
    distance:'90px',
    delay:800,
    origin:'left'

})
revelar.reveal('.trabalho-cientifico2',
{
    durantion:2000,
    distance:'90px',
    delay:800,
    origin:'right'

})
revelar.reveal('.img-funcionario1',
{
    durantion:1000,
    distance:'90px',
    delay:800,
    origin:'left'

})
revelar.reveal('.efeito-funcionario1',
{
    durantion:2000,
    distance:'90px',
    delay:800,
    origin:'right'

})
revelar.reveal('.img-funcionario2',
{
    durantion:1000,
    distance:'90px',
    delay:800,
    origin:'left'

})
revelar.reveal('.efeito-funcionario2',
{
    durantion:2000,
    distance:'90px',
    delay:800,
    origin:'right'

})
revelar.reveal('.img-funcionario3',
{
    durantion:1000,
    distance:'90px',
    delay:800,
    origin:'left'
})
revelar.reveal('.efeito-funcionario3',
{
    durantion:2000,
    distance:'90px',
    delay:800,
    origin:'right'
})

//EFEITO-FORMULÁRIO
revelar.reveal('.connosco1',
{
    durantion:1000,
    distance:'90px',
    delay:100
    
})
revelar.reveal('.connosco2',
{
    durantion:3000,
    distance:'90px',
    delay:300
    
})
revelar.reveal('.connosco3',
{
    durantion:5000,
    distance:'90px',
    delay:500
    
})
revelar.reveal('.connosco4',
{
    durantion:7000,
    distance:'90px',
    delay:700
    
})
revelar.reveal('.connosco5',
{
    durantion:9000,
    distance:'90px',
    delay:900
    
})
revelar.reveal('.connosco6',
{
    durantion:1100,
    distance:'90px',
    delay:1100
    
})

//EFEITO EM RODA-PE

revelar.reveal('.efeito-rodape',
{
    duration:2000,
    distance:'80px',
    delay:600,
    origin:'left'
})
revelar.reveal('.efeito-icon-link1',
{
    duration:1000,
    distance:'50px',  
})
revelar.reveal('.efeito-icon-link2',
{
    duration:3000,
    distance:'50px',
})
revelar.reveal('.efeito-icon-link3',
{
    duration:5000,
    distance:'50px',   
})

revelar.reveal('.efeito-link',
{
    duration:2000,
    distance:'80px',
    delay:600,
    origin:'right'
})