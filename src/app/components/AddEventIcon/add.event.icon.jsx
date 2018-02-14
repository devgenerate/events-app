import React from 'react'
import Avatar from 'material-ui/Avatar'
import DoneIcon from 'material-ui-icons/done'
import Add from 'material-ui-icons/add'
import { withStyles } from 'material-ui/styles'

const styles = {
  greenCircle: {
    color: '#fff',
    backgroundColor: '#00C766',
    width: 56,
    height: 56,
    'cursor': 'pointer'
  },
  blackCircle: {
    color: '#fff',
    backgroundColor: '#323C46',
    width: 56,
    height: 56,
    'cursor': 'pointer'
  }
}

const AddEventIcon = props => {
  const {onClickIcon, classes, color} = props
  let style
  let icon

  if (color && color === 'greenCircle') {
    style = classes.greenCircle
    icon = <DoneIcon />
  } else {
    icon = <Add />
    style = classes.blackCircle
  }

  return (
    <Avatar className={style} onClick={onClickIcon} >
      {icon}
    </Avatar>
  )
}

export default withStyles(styles)(AddEventIcon)
