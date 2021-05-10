import React, { Component } from 'react'
//Gera ID unico
import { uniqueId } from 'lodash'

import filesize from 'filesize'

import GlobalStyle from './styles/global'
import { Container, Content } from './styles'

import FileList from './components/FileList'
import Upload from '../src/components/Upload/index'
export default class App extends Component {
  state = {
    uploadedFiles: []
  };

handleUpload = files => {
    //  console.log(files)
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }))

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    //Mandar os arquivos para a api
};

  render() {
    const { uploadedFiles } = this.state;
    return (
      <Container>
        <Content>
            <Upload onUpload={this.handleUpload}/>
            {!!uploadedFiles.length && (
              <FileList files={uploadedFiles}/>
            )}
        </Content>
        <GlobalStyle/>
      </Container>
    )
  }
}


