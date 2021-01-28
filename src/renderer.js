const aboutMe = document.querySelector('.about-me')
const prev = document.querySelector('#prev')
const subjectNumber = document.querySelector('#subject-number')
const calcBtn = document.querySelector('.gradding-head #calc-btn')
let attr= prev.getAttribute('src')
let nextIcon="icons/next.png"
const expValues = ['A','BPLUS','B','C','D','E','S','F']
const {remote,ipcRenderer,Notification} = require('electron')
const currentWindow = remote.getCurrentWindow()


const calculator = require('./calculator')

prev.addEventListener('click',(e)=>{
    let thisAttr= e.target.getAttribute('src')
    if (thisAttr === attr) {
        e.target.setAttribute('src',nextIcon)
        aboutMe.style.width="23rem"
        
    }else{

        prev.setAttribute('src',"icons/prev.png")
        aboutMe.style.width='0px'
    }
})

/* const gradeBox = document.createElement('input')
gradeBox.setAttribute('class','input-box')
gradeBox.setAttribute('type','text') */
// gradeBox.setAttribute('name','grade_'+num)
// document.querySelector('.gradding').replaceWith(gradeBox)
let it =[]
document.querySelector('#create-inputs').addEventListener('click',(e)=>{
    // let num =subjectNumber.value.trim()
    let num =subjectNumber.value.trim()
    // let inputBox =[]
    if(num!='' && num <= 12){
        calcBtn.disabled = false
        document.querySelector('#clear-inputs').style.display='inline'
        for (let i = 0; i < num; i++) {
            const gradeBox = document.createElement('input')
            gradeBox.setAttribute('class','input-box grade-boxes')
            gradeBox.setAttribute('type','text')
            gradeBox.setAttribute('name','grade_'+i)
            document.querySelector('.grade-input-box').appendChild(gradeBox)
        }
    }else{
        document.querySelector('.grade-input-box').innerHTML =''
        calcBtn.disabled = true
        document.querySelector('#clear-inputs').style.display='none'
    }
})

/* Clear Input Boxes */

    document.querySelector('#clear-inputs').addEventListener('click',()=>{
        document.querySelector('.grade-input-box').innerHTML=" "
        calculator.clearInputs()
    })

    
// CALCULATING GPA
let level
document.querySelectorAll('#navigation button').forEach(element=>{
    // getting the selected education level
    element.className=''
    element.addEventListener('click',(e)=>{
        let r=e.target.parentNode.children
        for (let i = 0; i < r.length; i++) {
            if (r[i].className=='focused') {
                r[i].className=''
                // console.log(e.target.className);
            }
            
        }
        e.target.className = 'focused'
        return level =e.target.dataset.level
    })
})

calcBtn.addEventListener('click',()=>{
//    calc(level)
   calculator.calc(level)
})

// GRADING THE RESULTS
document.querySelector('#grade-result').addEventListener('click',()=>{
    calculator.gradeResult()
})