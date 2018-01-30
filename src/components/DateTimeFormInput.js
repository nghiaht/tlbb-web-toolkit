import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  <DateTimePicker
    onChange={onChange}
    format="DD/MM/YYYY HH:mm"
    time={true}
    value={!value ? null : new Date(value)}
  />

export default renderDateTimePicker;