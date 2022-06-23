import { gql, useQuery } from '@apollo/client'
import React from 'react'
import LessonCard from './LessonCard'

const GET_LESSON_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      slug
      title
    }
  }
`;

interface GetLessonQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: 'live' | 'class'
  }[]
}

const SideBar = () => {
  const {data} = useQuery<GetLessonQueryResponse>(GET_LESSON_QUERY);
  
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600 '>
      <h3 className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500'>
        Cronograma de aulas
      </h3>
      <div className='flex flex-col gap-8 '>
        {data?.lessons.map(({id, title, slug, availableAt, lessonType}) => {
          return (
            <LessonCard 
              key={id}
              title={title}
              slug={slug}
              availableAt={new Date(availableAt)}
              type={lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}

export default SideBar