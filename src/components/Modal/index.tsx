import React, { FC, useRef, useEffect } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { ModalStyles, Header, IconWrapper, TitleWrapper } from "./style";
import { Icon, colors, Text } from "theme";
import { height } from "utils/common";

interface ModalProps {
  showModal: boolean;
  setShowModal: (T: boolean) => void;
  title?: string;
  children?: React.ReactNode[];
}

const Modal: FC<ModalProps> = ({
  showModal,
  setShowModal,
  title,
  children,
}) => {
  const refRBSheet = useRef(null);
  useEffect(() => {
    if (showModal) {
      refRBSheet.current.open();
    } else {
      refRBSheet.current.close();
    }
  }, [showModal]);

  return (
    <RBSheet
      ref={refRBSheet}
      height={height * 0.85}
      openDuration={250}
      onClose={() => setShowModal(false)}
      animationType="fade"
      customStyles={ModalStyles}>
      <Header>
        <IconWrapper onPress={() => setShowModal(false)}>
          <Icon name="close" size={18} color={colors.text} />
        </IconWrapper>
        {!!title && (
          <TitleWrapper>
            <Text size={18}>{title}</Text>
          </TitleWrapper>
        )}
      </Header>
      {children}
    </RBSheet>
  );
};

export default Modal;
