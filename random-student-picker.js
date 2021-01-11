const students = [
  'Student 1',
  'Student 2',
  'Student 3',
  'Student 4',
  'Student 5',
]

const availableList = document.getElementById('list-available')
const pickedList = document.getElementById('list-picked')
const pickButton = document.getElementById('pick-button')

students.forEach(student => {
  const li = document.createElement('li')
  li.innerText = student
  availableList.append(li)
})

const pickRandomStudent = () => {
  const pickedIndex = Math.floor(Math.random() * availableList.childElementCount)

  const pickedStudent = availableList.children[pickedIndex]

  pickedList.prepend(pickedStudent)
}

pickButton.addEventListener('click', function(e) {
  console.log('PICKING STUDENT!')
  pickRandomStudent()
})

console.log(availableList)
