const students = [
	{
		name: "João",
		grade1: 4,
		grade2: 8,
	},
	{
		name: "Letícia",
		grade1: 10,
		grade2: 9,
	},
	{
		name: "Diego",
		grade1: 9,
		grade2: 9,
	},
	{
		name: "Julia",
		grade1: 5,
		grade2: 6,
	},
]
  
function average(grade1, grade2) {
	return ((grade1 + grade2) / 2).toFixed(1)
}

function averageStudent(student) {
	return `A média do(a) aluno(a) ${student.name} é ${average(student.grade1, student.grade2)}`
}

function situationStudent(student) {
	if(average(student.grade1, student.grade2) >= 7){
		return `Parabéns, ${student.name}! Você foi aprovado(a) no concurso.`
	}else{
		return `Não foi dessa vez, ${student.name}! Tente novamente!`
	}
}

for (let student of students) {
	let messageMedia = averageStudent(student)
	let messageSituation = situationStudent(student)
	alert(messageMedia + "\n" + messageSituation)
}
