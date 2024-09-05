import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong>{props.alert.message}
    </div>
  )
}
