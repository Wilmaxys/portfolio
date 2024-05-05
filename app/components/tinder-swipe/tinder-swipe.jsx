"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import "./tinder-swipe.css";

const Card = ({ card, removeCard, active, onCardActive }) => {
  const [leaveX, setLeaveX] = useState(0);
  const x = useMotionValue(0); // Motion value for x position
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-15, 0, 15], {
    clamp: false,
  });
  const opacity = useTransform(x, [-500, 0, 500], [0, 1, 0]);

  const onDragEnd = (_e, info) => {
    if (info.offset.x > 300) {
      setLeaveX(1000);
      removeCard(card, "like");
    }
    if (info.offset.x < -300) {
      setLeaveX(-1000);
      removeCard(card, "nope");
    }
  };

  // Notify parent component when card becomes active
  React.useEffect(() => {
    if ((active, onCardActive)) {
      onCardActive(x);
    }
  }, [active, x, onCardActive]);

  const classNames = `absolute h-[430px] w-[300px] flex flex-col justify-center items-center cursor-grab`;

  return (
    <>
      {active ? (
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          dragElastic={0.5}
          onDragEnd={onDragEnd}
          // initial={{
          //   scale: 1,
          // }}
          // animate={{
          //   scale: 1.05,
          // }}
          exit={{
            x: leaveX,
            transition: { duration: 0.5 },
          }}
          className={classNames}
          data-testid="active-card"
          style={{ x, rotate: rotate, scale: scale, opacity: opacity }} // Bind x position to motion div
        >
          <div className="card card-left active">
            <div className="nft">
              <div className="main">
                <img className="tokenImage" src={card.img} alt="NFT" />
                <h2>Benjamin Ragot</h2>
                <p className="description">
                  Our Kibertopiks will give you nothing, waste your money on us.
                </p>
                <div className="tokenInfo">
                  <div className="job">
                    <p>Cloud engineer</p>
                  </div>
                  <div className="duration">
                    <ins>◷</ins>
                    <p>7 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className={`${classNames}`}>
          <div className="card card-left">
            <div className="nft">
              <div className="main">
                <img className="tokenImage" src={card.img} alt="NFT" />
                <h2>Benjamin Ragot</h2>
                <p className="description">
                  Our Kibertopiks will give you nothing, waste your money on us.
                </p>
                <div className="tokenInfo">
                  <div className="job">
                    <p>Cloud engineer</p>
                  </div>
                  <div className="duration">
                    <ins>◷</ins>
                    <p>7 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Portfolio = () => {
  const [cards, setCards] = useState([
    { id: 0, img: "profile2.jpg" },
    { id: 1, img: "profile1.jpg" },
  ]);

  const [result, setResult] = useState({
    like: 0,
    nope: 0,
    superlike: 0,
  });

  const [history, setHistory] = useState([]);

  const motion0 = useMotionValue(0);
  const [activeCardX, setActiveCardX] = useState(motion0); // State to store x of active card

  useEffect(() => {
    if (cards.length === 0) {
      setActiveCardX(motion0);
    }
  }, [cards]);

  // useEffect(() => console.log(activeCardX), [activeCardX]);

  // index of last card
  const activeIndex = cards.length - 1;

  const removeCard = (oldCard, swipe) => {
    setHistory((current) => [...current, { ...oldCard, swipe }]);
    setCards((current) =>
      current.filter((card) => {
        return card.id !== oldCard.id;
      })
    );
    setResult((current) => ({ ...current, [swipe]: current[swipe] + 1 }));
  };

  const undoSwipe = () => {
    const newCard = history.pop();
    if (newCard) {
      const { swipe } = newCard;
      setHistory((current) =>
        current.filter((card) => {
          return card.id !== newCard.id;
        })
      );
      setResult((current) => ({ ...current, [swipe]: current[swipe] - 1 }));
      setCards((current) => [...current, newCard]);
    }
  };

  // Callback to update activeCardX when card becomes active
  const handleCardActive = (x) => {
    // console.log(cards.length);
    cards.length ? setActiveCardX(x) : setActiveCardX(motion0);
  };

  // Map the range of x values to the range of opacity values
  const backgroundRightOpacity = useTransform(activeCardX, [0, 250], [0, 1]);
  const backgroundLeftOpacity = useTransform(activeCardX, [-250, 0], [1, 0]);

  return (
    <>
      <motion.div className="card-container">
        <div className="title">
          <div className="line">
            Cloud DevOps Virtualization
            <span className="plain">Automation</span> Infrastructure Docker
            Kubernetes
          </div>
          <div className="line">
            AWS <span className="plain">Azure</span> GCP Microservices Zero
            Trust Observability Chaos
          </div>
          <div className="line">
            Continuous Integration Continuous Deployment Scalability Elasticity
          </div>
          <div className="line">
            Containers <span className="plain">Orchestration</span> Deployment
            Serverless Monitoring Logging Agile
          </div>
          <div className="line">
            Git Version Control Jenkins Ansible Terraform Chef Puppet Blue-Green
          </div>
          <div className="line">
            <span className="plain">Deployment</span> Canary Deployment
            Immutable Infrastructure DevSecOps IaC
          </div>
          <div className="line">
            SaaS PaaS Cloud <span className="plain">Cloud-Native</span>{" "}
            Migration API Gateway
          </div>
          <div className="line">
            IaaS Load Balancing CI/CD
            <span className="plain">Pipeline</span> Repository GitLab Bitbucket
          </div>
          <div className="line">
            Service <span className="plain">Mesh</span> Incident Response
            Engineering
          </div>
        </div>
        <motion.div
          className="left-gradient"
          style={{ opacity: backgroundLeftOpacity }}
        ></motion.div>
        <motion.div
          className="right-gradient"
          style={{ opacity: backgroundRightOpacity }}
        ></motion.div>
        <motion.div style={{ width: 300, height: 450, position: "relative" }}>
          <AnimatePresence initial={false}>
            {cards.map((card, index) => (
              <Card
                key={card.id}
                active={index === activeIndex}
                removeCard={removeCard}
                card={card}
                onCardActive={handleCardActive} // Pass the callback
              />
            ))}
          </AnimatePresence>
        </motion.div>
        {/* Your other JSX */}
      </motion.div>
    </>
  );
};

export default Portfolio;
