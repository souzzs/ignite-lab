import React from 'react'
import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';

interface LessonCardsProps {
  title: string,
  slugProp: string,
  availableAt: Date,
  type: "live" | "class",
}

const LessonCard = ({title, slugProp, availableAt, type}: LessonCardsProps) => {
  const {slug} = useParams<{slug: string}>();
  const isLessonAvaible = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  });

  const activeLesson = slug === slugProp;

  return (
    <Link to={`/event/lesson/${slugProp}`} className='group'>
      <span className='text-gray-300'>
        {availableDateFormatted} 
      </span>
      <div className={`rounded border border-gray-500 p-4 mt-2 ${activeLesson ? 'bg-green-500': ''} group-hover:border-green-500`}>
        <header className='flex items-center justify-between'>
          {isLessonAvaible ? (
            <span className={`text-sm font-medium flex items-center gap-2 ${activeLesson ? 'text-white' : 'text-blue-500'}`}>
              <CheckCircle size={20}/>
              Conteúdo Liberado
          </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20}/>
              Em breve
            </span>
          )}
          <span className='text-sx rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold'>
            {type === 'live' ? 'AO VIVO' : 'PRÁTICA'}
          </span>
        </header>
        <p className={` mt-5 block font-bold ${activeLesson ? 'text-white' : 'text-gray-200'}`}>
          {title}
        </p>
      </div>
    </Link>
  )
}

export default LessonCard