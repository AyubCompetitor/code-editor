import Select from 'react-select'
import { CustomSelectProps } from './model';

import './styles.css';

const CustomSelect = ({ options, value, onChangeHandler }: CustomSelectProps) => {

    const preparedValueObject = {
        label: value,
        value: value
    }

    return (
        <Select
            className="language-selector-container"
            classNamePrefix="language-selector"
            options={options}
            defaultValue={options[0]}
            value={preparedValueObject}
            onChange={option => onChangeHandler(option?.value as string)}
        />
    )
};

export default CustomSelect;