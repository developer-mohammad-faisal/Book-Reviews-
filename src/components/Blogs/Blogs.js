import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="vh-100">
      <h1 className="review-title p-5 text-center">
        {" "}
        Three Question and Answerer{" "}
      </h1>
      <Accordion className="m-5 p-5" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {" "}
            <strong>What is Context API?</strong>{" "}
          </Accordion.Header>
          <Accordion.Body>
            কন্টেক্সট এপিআই দিয়ে props mapping না করেই tree এর নিচের দিকের কোন
            child component তার উপরের দিকের যেকোন component এ access পাবে।
            কন্টেক্সট shared data কে global হিসেবে ধরে নেয় যাতে component tree
            এর সবাই মোটামুটি access পায়।
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <strong>What is Semantic Tag?</strong>{" "}
          </Accordion.Header>
          <Accordion.Body>
            Semantic Tag এর main কাজ হচ্ছে developer যে কোড করছে সেটা ডিটেইলে
            বোঝা যায় এবং Browser এর প্রত্যাকটা পার্ট অনুযায়ী করা যায়। যেমনঃ
            aside, from, table, section, header, footer, main, nav etc. এই রকম
            আরো অনেক রকমের semantic tag আছে যা developer দের কাজ করতে অনেক
            সুবিধা করে দিয়েছে।
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <strong>
              What will be different of inline block and inline block element?
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            <strong> ১. Inline Block </strong> <br />
            <strong> ২. Inline block Element</strong> গুলো প্যারেন্ট Element এর
            সমস্ত জায়গা জুড়ে থাকে। আর Inline Element গুলো একটার পর একটা বসতে
            থাকে একটা লাইন ধরে। <br />
            Block Element গুলো শুরু হয় সব সময় নতুন লাইন থেকে। সাধারণত Block
            Element এর ভেতর Inline বা block Element ২টাই থাকতে পারে। যেমন div এই
            Element এর ভেতর অন্য div, p block Element অথবা Inline Element span,
            a Element থাকতে পারে। Element এর ভেতর data অথবা অন্য কোনো Inline
            Element থাকে।
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
