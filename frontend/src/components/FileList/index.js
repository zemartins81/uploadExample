import React from 'react';
import {CircularProgressbar} from "react-circular-progressbar";
import {MdCheckCircle, MdError, MdLink} from 'react-icons/md'

import { Container, FileInfo, Preview } from "./styles";

const FileList = () => {
    return (
        <Container>
            <li>
                <FileInfo>
                    <Preview src=""></Preview>
                    <div>
                        <strong>profile.png</strong>
                        <span>64 kb <button onClick={() => {}}>Excluir</button> </span>
                    </div>
                </FileInfo>

                <div>
                    <CircularProgressbar
                        styles={{
                            root: { width: 24},
                            path: { stroke: '#7159c1'}
                        }}
                        strokeWidth={10}
                        percentage={60}
                    />

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <MdLink style={{marginRight: 8}} size={24} color="#222" />
                    </a>

                    <MdCheckCircle size={24} color="#78e5d5" />
                    <MdError size={24} color="#e57878" />
                </div>
            </li>
        </Container>
    );
};

export default FileList;