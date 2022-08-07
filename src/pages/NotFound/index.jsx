import React from 'react'

import s from './NotFound.module.scss'

export default function NotFound() {
  return (
    <div className={s.notfound}>
      <div className={s.emoji}>😶</div>
      <div className={s.title}>
        We can't find that page
      </div>
      <div className={s.msg}>
        We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.
      </div>
    </div>
  )
}
