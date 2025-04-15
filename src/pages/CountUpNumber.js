import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import CountUp from "react-countup";
import styled from "styled-components";

const NumberWrapper = styled.p`
  font-family: "NanumBuJangNimNunCiCe", sans-serif;
  font-size: 2rem;
  color: #333;
  margin: 0;
`;

const CountUpNumber = forwardRef(({ end, unit, style }, ref) => {
  const countUpRef = useRef(null);
  const [reset, setReset] = useState(false);

  useImperativeHandle(ref, () => ({
    reset() {
      if (countUpRef.current) {
        setReset(true);
        setTimeout(() => setReset(false), 10); // Short delay to force re-render
      }
    },
  }));

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  return (
    <NumberWrapper style={style}>
      <CountUp
        ref={countUpRef}
        key={reset ? "reset" : "noreset"}
        end={end}
        duration={5}
        separator=","
        decimal=","
        suffix={unit}
        start={0}
        useEasing={true}
      />
    </NumberWrapper>
  );
});

export default CountUpNumber;
