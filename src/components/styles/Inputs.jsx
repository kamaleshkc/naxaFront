import styled from "styled-components";
import { Input} from "antd";

const  ReInput = styled(Input)`
  width: 100%;
  border-radius: 3px;
  padding: 10px;  

`

export const Password = styled(Input.Password)`
  border-radius: 14px;
  padding: 1rem;
`;

export default ReInput;