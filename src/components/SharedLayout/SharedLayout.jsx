import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header/header';
import { BasicModal } from '../Modals/BasicModal/BasicModal';
import Leaving from '../Modals/Leaving/Leaving';
import LearnMore from '../Modals/LearnMore/LearnMore';
import AttentionModal from '../Modals/Attention/Attention';
import DeleteModal from '../Modals/DeleteModal/DeleteModal';

export default function SharedLayout() {
  const [isLearnMoreModalOpen, setLearnMoreModalOpen] = useState(false);
  const [isAttentionModalOpen, setAttentionModalOpen] = useState(false);

  const handleOpenAttentionModal = () => {
    setAttentionModalOpen(true);
  };
  const handleCloseAttentionModal = () => {
    setAttentionModalOpen(false);
  };
  const handleOpenLearnMoreModal = () => {
    setLearnMoreModalOpen(true);
  };
  const handleCloseLearnMoreModal = () => {
    setLearnMoreModalOpen(false);
  };

  return (
    <>
      <Header />
      <main>
        <BasicModal
          isOpen={isLearnMoreModalOpen}
          onCloseModal={handleCloseLearnMoreModal}
        >
          <LearnMore
            onOpenAtentionModal={handleOpenAttentionModal}
            onCloseModal={handleCloseLearnMoreModal}
          />
        </BasicModal>
        <BasicModal
          isOpen={isAttentionModalOpen}
          onCloseModal={handleCloseAttentionModal}
        >
          <AttentionModal onCloseModal={handleCloseAttentionModal} />
        </BasicModal>

        <Suspense fallback={<h2>Loading...</h2>}>{<Outlet />}</Suspense>
      </main>
    </>
  );
}
