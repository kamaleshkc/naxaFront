import React from 'react'
import {Form } from 'antd'
import ReInput from './styles/Inputs';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import PrimaryButton from '../components/styles/Button'
import {InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useState } from 'react';
// Name, Address, Email,
// Contact, upload a Photo and Upload a file (CV) with validation

export default function Forms ()  {    
    const [fileList]=useState([]);
    const normFile = (e) => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }

    const onFinish = (values) => {
     
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
     
    return (
      <Form.Wrapper>
        <Form         
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ width: "300px" }}
        >
          <h4>Name</h4>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <ReInput />
          </Form.Item>
          <h4>Email</h4>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <ReInput />
          </Form.Item>

          <h4>Address</h4>
          <Form.Item
            name="address"
            rules={[{ required: true, message: "Please input school name!" }]}
          >
            <ReInput />
          </Form.Item>

          <h4>Contact</h4>
          <Form.Item
            rules={[{ required: true, message: "Please input your Address!" }]}
          >
            <ReInput />
          </Form.Item>
          <h4>Upload</h4>
          <Form.Item  name="logo">
            <Upload
              beforeUpload={() => false}
              listType="picture"
              maxCount={1}
              fileList={[fileList]}
              className="upload-list-inline"
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <h4>Upload a file.</h4>
          <Form.Item >
            <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
              <Upload.Dragger name="files" action="/upload.do" maxCount={1}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <Form.Item >
            <PrimaryButton>Submit</PrimaryButton>
          </Form.Item>
        </Form>
      </Form.Wrapper>
    );
}

Form.Wrapper=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;
