import React from 'react'
import Modal from '../../Components/Modal';

import ChromeConagua from './ChromeConagua';
export default function Profile(props) {
  const [openModal, setOpen] = React.useState(false);
  React.useEffect(() => {
    props.onModal(openModal);
  }, [openModal]);
  return (
    <div style={{ backgroundColor: '#080E1C', height: '900%', padding: 30 }}
    >
      <a onClick={() => { setOpen(true) }} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#121F32] dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mexico Wheather satellites chrome extension</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">I Create a chrome extension that take some satellite images from smn.conagua.gob.mx for watch the weather</p>
      </a>
      <Modal title="Example" Component={<ChromeConagua></ChromeConagua>} setShowModal={setOpen} showModal={openModal}></Modal>
    </div>
  )
}
