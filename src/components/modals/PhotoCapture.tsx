import styled from "styled-components";
import ModalLayout from "./ModalLayout";

import { useEffect, useState, useRef } from "react";
import { Images, Icons } from "../../utils/assets";

const PhotoCaptureWrapper = styled.div`
  width: 90%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 30px;
  z-index: 100;
  padding: 58px 43px;
  max-width: 480px;

  > .header{
    position: relative;
    .category {
      color: ${props => props.theme.colors.black_primary};
      font-size: 22px;
      font-weight: 800;
      line-height: 1.2;
    }

    .title {
    }

    .btn-close {
      position: absolute;
      cursor: pointer;
      top: -20px;
      right: -10px;

      width: auto;
      height: auto;
      opacity: 1;
      background: unset;
      padding: 0;
      > img {
        max-width: unset;
      }
    }
  }

  .msg {
    color: red;
    margin-top: 15px;
  }

  .camera-wrapper {
    width: 99%;
    margin-top: 30px;
    display: flex;
    justify-content:center;
  }

  .action {
    display: flex;
    justify-content: center;

    > button {
      height: 46px;
      border: 0;
      outline: 0;
      border-radius: 20px;
      background-color: ${props => props.theme.colors.green_primary};
      color: ${props => props.theme.colors.white};
      font-size: 14px;
      font-weight: 600;
      line-height: 1.2;
      padding: 0 43px;
      margin-top: 30px;
      cursor: pointer;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    > .header {
      .category {
        font-size: 24px;
      }
    }
    .txt {
      font-size: 16px;
    }
    > button {
      font-size: 16px;
    }
  }
`

type PhotoCaptureProps = {
  opened: boolean,
  onClose: () => void,
  onTakePhoto: (video: any) => void,
}

const PhotoCapture = ({ opened, onClose, onTakePhoto }: PhotoCaptureProps): JSX.Element => {
  const initiated = useRef<boolean>(false);
  useEffect(() => {
    if (initiated.current) return;

    initiated.current = true;

    init();
  }, []);

  let message: any = {},
    video: any = {},
    canvas: any = {};

  function initElement() {
    message = document.getElementById('msg');
    video = document.querySelector('video');
    // canvas = document.querySelector('canvas');

    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
    }

    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = function (constraints: any) {

        var getUserMedia = navigator.getUserMedia 
          || navigator.webkitGetUserMedia 
          || navigator.mozGetUserMedia 
          || navigator.msGetUserMedia;

        if (!getUserMedia) {
          return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }

        return new Promise(function (resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        })
      }
    }
  }

  function initEvent() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(onMediaStream)
      .catch(onMediaError);
  }
 
  function onMediaStream(stream: any) {
    if ('srcObject' in video) {
      video.srcObject = stream;
    } else {
      video.src = window.URL.createObjectURL(stream);
    }
    window.streamReference = stream;
    message.style.display = 'none';    
    video.addEventListener('loadedmetadata', onLoadVideo);
  }

  function onLoadVideo() {
    video.setAttribute('width', 320);
    video.setAttribute('height', 240);
    // canvas.setAttribute('width', this.videoWidth);
    // canvas.setAttribute('height', this.videoHeight);
    console.log("loading video...");
    video.play();
  }

  function onMediaError(err: any) {
    message.innerHTML = err.name + ': ' + err.message;
  }

  const init = () => {
    initElement();
    initEvent();
  };

  const handleClose = () => {
    (document.querySelector("body") as any).style.overflow = "unset";

    if (window.streamReference) {
      window.streamReference.getAudioTracks().forEach(function(track) {
          track.stop();
      });

      window.streamReference.getVideoTracks().forEach(function(track) {
          track.stop();
      });

      window.streamReference = null;
    }
    onClose();
  };

  const handlePhoto = () => {
    onTakePhoto(video);
    handleClose();
  };

  return (
    <ModalLayout opened={opened} onClose={onClose}>
      <PhotoCaptureWrapper>
        <div className="header">
          <h2 className="title">Ausweiskopie</h2>
          <button className="btn-close" onClick={() => handleClose()}>
            <img src={Icons.Close_1} alt="" width="30px" />
          </button>
        </div>
        <div className="msg" id="msg"></div>
        <div className="camera-wrapper">
          <video></video>
        </div>
        <div className="action">
          <button type="button" onClick={handlePhoto}>Ausweis erfassen</button>
        </div>
      </PhotoCaptureWrapper>
    </ModalLayout>
  );
}

export default PhotoCapture;