import styled from "styled-components";
import Typography from "../../theme/Typography";
import WavyText from "./loader";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Flex from "../../Tool-kit/Flex";
import Button from "../../Tool-kit/Button";
import useSound from "use-sound";
import sound from "../../Assets/mixkit-fast-small-sweep-transition-166.wav";
import { useRevealPage } from "../../hooks/useRevealPage";
const Preloader = () => {
  const [play] = useSound(sound);
  const { isRevealed, revealPage } = useRevealPage();
  const step = ["0", "25", "50", "75", "100", ""];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(active + 1);
    }, 1000);
    if (active === step.length - 1) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active, step.length]);

  const buttonAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { delay: 0.6 },
    }),
  };

  const percentAnimation = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  };

  const wrapperAnimation = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 1, y: "-100%" },
  };

  const handleButtonClick = () => {
    play();
    revealPage();
  };

  console.log(isRevealed);
  return (
    <Wrapper>
      <motion.div
        variants={wrapperAnimation}
        animate={!isRevealed ? "open" : "closed"}
        transition={{ duration: 1, ease: "easeIn" }}
        style={{
          position: "relative",
          height: "100vh",
        }}
        className="content-wrapper"
      >
        <div
          style={{
            maxWidth: "90%",
          }}
        >
          <Typography font="h2Regular" color="gray2" fontWeight="700">
            Oyewo Oluwaseyitan
          </Typography>
          <Typography
            font="h2Regular"
            color="gray2"
            mt=".5rem"
            fontWeight="700"
          >
            Portfolio ©2022
          </Typography>
        </div>
        <LoaderWrapper>
          <AnimatePresence exitBeforeEnter>
            <motion.span
              variants={percentAnimation}
              key={step[active]}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2 }}
            >
              <WavyText text={step[active]} />
              {active === step.length - 1 && (
                <div>
                  <Typography
                    font="h5Regular"
                    color="gray1"
                    fontWeight="700"
                    mb="2rem"
                    style={{
                      maxWidth: "35rem",
                    }}
                  >
                    HI THERE! WELCOME TO MY PORTFOLIO WEBSITE, CLICK ENTER TO
                    PROCEED
                  </Typography>
                  <motion.div
                    variants={buttonAnimation}
                    initial="hidden"
                    animate={"visible"}
                  >
                    <Button color="#BCABAE" onClick={handleButtonClick}>
                      Enter
                    </Button>
                  </motion.div>
                </div>
              )}
            </motion.span>
          </AnimatePresence>
        </LoaderWrapper>
      </motion.div>
    </Wrapper>
  );
};

export default Preloader;

const Wrapper = styled.div`
  .content-wrapper {
    background: ${({ theme }) => theme.colors.secondary};
    padding: 5rem;
    position: relative;
    overflow: hidden;
  }
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`;
