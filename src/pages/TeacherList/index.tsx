import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'

// https://twitter.com/AndreiNeagoie
// https://twitter.com/SnazzyQ
// https://twitter.com/maxvalarezo
// https://twitter.com/Katiucha
// https://twitter.com/rla4
// https://twitter.com/rafaelqa

function TeacherList() {
  const optionsSubjects = [
    { value: 'matematica', label: 'Matemática' },
    { value: 'quimica', label: 'Química' },
    { value: 'lingua-portuguesa', label: 'Lingua Portuguesa' },
    { value: 'fisica', label: 'Física' },
  ]
  const optionsWeekDays = [
    { value: '0', label: 'Domingo' },
    { value: '1', label: 'Segunda-feira' },
    { value: '2', label: 'Terça-feira' },
    { value: '3', label: 'Quarta-feira' },
    { value: '4', label: 'Quinta-feira' },
    { value: '5', label: 'Sexta-feira' },
    { value: '6', label: 'Sábado' },
  ]

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <Select name="subject" label="Matéria" options={optionsSubjects} />
          <Select name="week_day" label="Dia da semana" options={optionsWeekDays} />
          <Input name="time" label="Hora" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList
