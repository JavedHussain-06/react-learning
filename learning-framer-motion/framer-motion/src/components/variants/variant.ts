export const ballVariants = {
  hidden: { scale: 0.7, opacity: 0.15 },
  visible: { scale: 1, opacity: [0.5, 1] },
};
export const flipVariants = {
  front: {
    rotateY: 0,
  },
  back: {
    rotateY: 180,
  },
};

export const shapeVariants = {
  initial: { borderRadius: "5%", rotate: 0, scale: 1, skew: 
    "-13deg"
   },
  hover: {
    borderRadius: "15%",
    rotate: 25,
    scale: 1.2,
    skew: "10deg",
    backgroundColor: "#foo",
    transition: { duration: 0.3 },
  },
  click: {
    borderRadius: "10%",
    rotate: -25,
    scale: 0.8,
    skew: "-10deg",
    backgroundColor: "orange",
    transition: { duration: 0.3 },
  },
  drag: {
    borderRadius: "10%",
    rotate: -45,
    scale: 0.9,
    skew: "16deg",
    backgroundColor: "#f00",
    transition: { duration: 0.3 },
  },
};
