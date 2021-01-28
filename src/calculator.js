const gradding = require('./gradingSystem')
const grades = require('./gradding')
let average,total,results,gradePoints =[]
const calculator = {
    calc : (level)=>{
    const grade = (grade, num)=> grade + num
    
    const gradeBoxes = document.querySelectorAll('.grade-boxes')
    if(level){

        gradeBoxes.forEach(element => {
            if (expValues.includes(element.value.toUpperCase())) {
                // grade =degree[element.value].point
                try {
                    gradePoints.push(gradding[level][element.value.toUpperCase()].point)
                    // throw 'Error ocured'
                } catch (err) {
                    // console.log(err.name);
                    // break
                    remote.dialog.showMessageBox(currentWindow,{
                        type:'warning',
                        title:err.name,
                        message:'There is UnExpected Value, Results May Not Be True !!!',
                        buttons:['Ok'],
                        defaultId:0, cancelId:1
                    }).then((result)=>{
                        if(result.response === 1) return
                    }).catch((err)=>{
                        // console.log(err)
                        document.querySelector('.uncought-error').innerHTML= err
                    })
                }
            }
        });
        if (gradePoints.length !=0) {
            
            total = gradePoints.reduce(grade)
            average=(total/subjectNumber.value).toFixed(1)
            // avrg = average.toFixed(1)
            document.querySelector('.grade-result').innerHTML = `
            <div class="results">
            <span><h5>Total</h5><span class="badge">${total}</span></span>
            <span><h5>Average</h5><span class="badge">${average}</span></span>
            </div>`
            // displaying the grade button
            document.querySelector('#grade-result').style.display='inline'
        }else{
            remote.dialog.showMessageBox(currentWindow,{
                type:'warning',
                title:'INPUT VALUES',
                message:'Input Boxes were Empty !!!',
                buttons:['Ok'],
                defaultId:0, cancelId:1
            }).then((result)=>{
                if(result.response === 1) return
            }).catch((err)=>{
                // console.log(err)
                document.querySelector('.uncought-error').innerHTML= err
            })
        }
        calcBtn.disabled = true
    }else{ 
        remote.dialog.showMessageBox(currentWindow,{
            type:'warning',
            title:'Education Level Selection',
            message:'Education Level Was Not Selected Eg: (O-level,Degree or Certificate) !!!',
            buttons:['Ok'],
            defaultId:0, cancelId:1
        }).then((result)=>{
            if(result.response === 1) return
        }).catch((err)=>{
            // console.log(err)
            document.querySelector('.uncought-error').innerHTML= err
        })
        // console.log("level is missing");
    }
    // console.log(gradePoints);
},
gradeResult:()=>{
    /* console.log(average);
    console.log(level); */
    let grade
    if(level == 'olevel' || level=='alevel'){
    grade= grades[level].division
    grade.forEach(elm => {
        // console.log(elm.score)
        for (let i = elm.score.from; i < elm.score.to+1; i++) {
            if (total == i) {
                // console.log(elm);
            //    this.gradeElm(elm)
               document.querySelector('.results').innerHTML+= `
                   <span><h5>Description</h5>
                   <span class="badge">Division: ${elm.division}<br>
                   <span id="description">${elm.description} !!!</span>
                   </span>
                   </span>
                   `
            }
        }
    });
    // clearing the total value
    total =null
}else{
// FOR DIPLOMA AND DEGREE
// console.log(average);
grade= grades[level].class
    grade.forEach(elm => {
        // console.log(elm.score)
        for (let i = elm.score.from; i < elm.score.to+1; i++) {
            if (parseFloat(average) == i) {
                console.log(elm);
            //    this.gradeElm(elm)
               document.querySelector('.results').innerHTML+= `
                   <span><h5>Description</h5>
                   <span class="badge">
                   <span id="description">${elm.description} !!!</span>
                   </span>
                   </span>
                   `
            }
        }
    });
}

},
clearInputs:()=>{
    gradePoints.splice(0,gradePoints.length)
        // console.log(average);
    /* if( document.querySelector('#grade-result').style.display=='inline'){
        document.querySelector('#grade-result').disabled=false
    } */
},
}
module.exports = calculator