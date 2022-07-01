const firstForm = document.getElementById('first-form')
const div = document.createElement('div')

function DirbtinisIntelektas() {
    firstForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const form = e.target
        const input1 = form.querySelector('input[name="person-name"]').value
        const p1 = document.getElementById('first')
        const p2 = document.getElementById('second')
        const p3 = document.getElementById('third')
        fetch(`https://api.agify.io?name=${input1}`)
        .then(res => res.json())
        .then(age => {
            p1.textContent = `${input1} is ${age.age} years old`
            fetch(`https://api.genderize.io?name=${input1}`)
            .then(res => res.json())
            .then(data => { 
                p2.textContent = `there is ${data.probability}% chance that ${input1} is ${data.gender}`
            })
            fetch(`https://api.nationalize.io?name=${input1}`)
            .then(res => res.json())
            .then(data => {
               p3.textContent = `and there is ${data.country[0].probability}% chance that ${input1} is from ${data.country[0].country_id}`
            })
        })
     })
}




document.body.append(div)

DirbtinisIntelektas()