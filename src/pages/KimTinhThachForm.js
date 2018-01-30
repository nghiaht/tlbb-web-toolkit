import React from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import {calculateKimTinhThach} from '../utils';

const renderField = ({input, label, type, meta: {touched, error}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} className="form-control"/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

function renderKTTOptions(props) {

  const {fields, meta: {error, submitFailed}, handleLevelChange} = props;

  const handleChange = (member, index, fields) => {
    let current = fields.get(index);
    let currentLevel = current.currentLevel || 0;
    let targetLevel = current.targetLevel || 0;

    console.log("currentLevel", currentLevel, "targetLevel", targetLevel);
    // let totalQuantity = calculateKimTinhThach(currentLevel, targetLevel);
    // console.log("totalQuantity", totalQuantity);
    handleLevelChange(`${member}.totalQuantity`);
  };

  return (
    <div>
      <button type="button" onClick={() => fields.push({})}>
        Thêm dòng tinh thông
      </button>
      {submitFailed && error && <span>{error}</span>}
      {fields.map((member, index, fields) => (
        <div key={index}>
          <h4>Dòng Tinh Thông #{index + 1}</h4>

          <div className="form-row">


            <div className="col">
              <Field
                name={`${member}.currentLevel`}
                component={renderField}
                type="number"
                label="Cấp tinh thông hiện tại"
                onChange={handleChange(member, index, fields)}
              />


            </div>
            <div className="col">
              <Field
                name={`${member}.targetLevel`}
                component={renderField}
                type="number"
                label="Cấp tinh thông mục tiêu"
              />


            </div>

            <div className="col">
              <Field
                name={`${member}.totalQuantity`}
                component={renderField}
                type="number"
                label="Số lượng Kim Tinh Thạch cần"
                readOnly
              />
            </div>

            <div className="col">
              <button
                type="button"
                onClick={() => fields.remove(index)}
                className="btn btn-outline-warning btn-sm"
              >Xóa dòng này
              </button>
            </div>

          </div>
        </div>


      ))}
    </div>
  )
}

class KimTinhThachForm extends React.Component {


  render() {
    const {change} = this.props;

    const handleLevelChange = (name, value) => {
      // change(name, value);
    };

    return (<form className="">
      <FieldArray name="options" component={renderKTTOptions} handleLevelChange={handleLevelChange}/>

    </form>)
  }
}

export default reduxForm({
  form: 'kimTinhThachForm',
  enableReinitialize: true
})(KimTinhThachForm)