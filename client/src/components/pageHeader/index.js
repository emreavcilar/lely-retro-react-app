
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons'
import './index.scss';
import { signOut } from 'containers/signIn/actions';

const PageHeader = (props) => {
  //parameters passed to component
  const {
    title,
    data,
    id,
    onDropDownChange,
    selectedValue,
  } = props;
  const [selectedVal, setSelectedVal] = useState(null);
  const dispatch = useDispatch();

  // if selected value is null show first value of data
  useEffect(() => {
    if (!selectedValue && data) {
      setSelectedVal(data[0]?.value)
    }
  }, [data])

  const signOutFn = () => {
    dispatch(signOut());
  }

  return (
    <>
      <div className='page-header-container d-flex justify-content-between'>
        <div className='left-container d-flex'>
          <h4 className='mr-3'>{title}</h4>

          {data &&
            <Dropdown>
              <Dropdown.Toggle>{data.find((item) => item.value === selectedVal)?.text}</Dropdown.Toggle>

              <Dropdown.Menu>
                {data.map((item, index) => {
                  return <Dropdown.Item
                    as="button"
                    onClick={(e) => {
                      onDropDownChange(e.target.value);
                      setSelectedVal(e.target.value)
                    }}
                    key={id + '-' + index}
                    value={item.value}
                    active={item.value === selectedValue}
                  >
                    {item.text}
                  </Dropdown.Item>
                })}

              </Dropdown.Menu>
            </Dropdown>
          }
        </div>


        <div className='right-container position-relative'>
          <div className='user-menu-container '>
            <div className='d-flex align-items-center'>

              <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  <FontAwesomeIcon icon={faCircleUser} size="1x" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Profile Settings</Dropdown.Item>
                  <Dropdown.Item href="#">Support</Dropdown.Item>
                  <Dropdown.Item href="#">Upgrade</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={() => signOutFn()}>Sign out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  id: PropTypes.string,
  onDropDownChange: PropTypes.func,
  selectedValue: PropTypes.string,
}

PageHeader.defaultProps = {

}

export default PageHeader;