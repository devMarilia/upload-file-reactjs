import React, { Component } from 'react'

import Dropzone from 'react-dropzone'

import { DropContainer, UploadMessage} from './styles'

export default class Upload extends Component {
    renderDragMenssage = (isDragActive, isDragReject) => {
        if(!isDragActive) {
            return <UploadMessage>Arraste arquivos aqui...</UploadMessage>
        }
        if(isDragReject) {
            return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
        }
        return <UploadMessage type="sucess">Solte os arquivos aqui</UploadMessage>
    }

    render() {

        const { onUpload } = this.props;

        return (
           <Dropzone accept="application/pdf" onDropAccepted={onUpload}> 
            {({getRootProps, getInputProps, isDragActive, isDragReject}) => (
                <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
                >
                <input {...getInputProps()}/>
                {this.renderDragMenssage(isDragActive, isDragReject)}
                </DropContainer>
              
            )}
           </Dropzone>
        )
    }
}
