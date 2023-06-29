import { Images, Icons } from "../../../utils/assets";

import {
  RequirementWrapper
} from "./styled";

type RequirementProps = {
  data: any
};

const Requirement = ({ data }: RequirementProps): JSX.Element => {
  const list = [
    {
      id: 1,
      title: 'Wie lange dauert der VKU?',
      description: `
      Seit Anfangs 2021 ist der VKU unbefristet gültig.
      `,
    },
    {
      id: 2,
      title: 'Was sind die Voraussetzungen?',
      description: `
      Seit Anfangs 2021 ist der VKU unbefristet gültig.
      `,
    },
    {
      id: 3,
      title: 'Was lerne ich im VKU?',
      description: `
      Seit Anfangs 2021 ist der VKU unbefristet gültig.
      `,
    },
    {
      id: 4,
      title: 'Wie lange ist der VKU gültig?',
      description: `
      Seit Anfangs 2021 ist der VKU unbefristet gültig.
      `,
    },
  ];

  return (
    <RequirementWrapper className="requirement">
      <div className="content">
        <div className="pic">
          <img src={data.image} alt="" />
          <div className="icon">
            <img src={data.icon} alt="" />
          </div>
        </div>
        <div className="article">
          <div className="title">
            <h1>{data.title}</h1>
            <img src={Images.UnderlineGreen} alt="" />
          </div>
          <div className="desc" dangerouslySetInnerHTML={{ __html: data.description }}>
          </div>
          <div className="accordion">
          {data.list.map((data1: any, index: number) =>
            <div key={index} className="one">
              <div className="subject">
                <h5>{data1.title}</h5>
                <span>
                  <img src={Icons.ArrowDown} alt="" />
                </span>
              </div>
              <div
                className="detail"
                dangerouslySetInnerHTML={{ __html: data1.description }}
              ></div>
            </div>
          )}
          </div>
        </div>
      </div>
    </RequirementWrapper>
  );
}

export default Requirement;