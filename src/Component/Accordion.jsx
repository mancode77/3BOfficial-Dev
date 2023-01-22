import { Fragment, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";


const Accordion = () => {
  const [ isOpen, setIsOpen ] = useState(false)


  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Fragment>
      <div>
        <Collapse ghost={true}>
          <CollapsePanel 
          showArrow={false}
          header={
            <div onClick={handleOpen} className="flex items-center gap-5 cursor-pointer">
              <FontAwesomeIcon className="bg-green-500 p-3" icon={isOpen ? faMinus : faPlus} />
              <h1 className="text-[14px] md:text-[20px] font-mono font-bold text-gray-800">Coming soon</h1>
            </div>
          }>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius similique sapiente laboriosam. Aut quasi assumenda perferendis. Doloribus, dignissimos accusamus culpa dicta rerum provident molestias voluptatibus facere placeat non. Tempore et atque culpa deleniti repellendus labore, quis omnis porro. Unde saepe vel quaerat illo, laboriosam deleniti sit cum quia excepturi dolore numquam asperiores rerum nesciunt explicabo, perspiciatis maxime eaque? Exercitationem maxime aspernatur reiciendis dignissimos sequi molestias, vel fuga amet commodi modi, quod soluta? Neque eaque inventore iusto saepe perspiciatis explicabo ducimus doloremque. Et, blanditiis autem, unde, quae mollitia enim vel sunt omnis nulla voluptatem pariatur cumque? Unde corporis soluta quam.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius similique sapiente laboriosam. Aut quasi assumenda perferendis. Doloribus, dignissimos accusamus culpa dicta rerum provident molestias voluptatibus facere placeat non. Tempore et atque culpa deleniti repellendus labore, quis omnis porro. Unde saepe vel quaerat illo, laboriosam deleniti sit cum quia excepturi dolore numquam asperiores rerum nesciunt explicabo, perspiciatis maxime eaque? Exercitationem maxime aspernatur reiciendis dignissimos sequi molestias, vel fuga amet commodi modi, quod soluta? Neque eaque inventore iusto saepe perspiciatis explicabo ducimus doloremque. Et, blanditiis autem, unde, quae mollitia enim vel sunt omnis nulla voluptatem pariatur cumque? Unde corporis soluta quam.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius similique sapiente laboriosam. Aut quasi assumenda perferendis. Doloribus, dignissimos accusamus culpa dicta rerum provident molestias voluptatibus facere placeat non. Tempore et atque culpa deleniti repellendus labore, quis omnis porro. Unde saepe vel quaerat illo, laboriosam deleniti sit cum quia excepturi dolore numquam asperiores rerum nesciunt explicabo, perspiciatis maxime eaque? Exercitationem maxime aspernatur reiciendis dignissimos sequi molestias, vel fuga amet commodi modi, quod soluta? Neque eaque inventore iusto saepe perspiciatis explicabo ducimus doloremque. Et, blanditiis autem, unde, quae mollitia enim vel sunt omnis nulla voluptatem pariatur cumque? Unde corporis soluta quam.</p>
          </CollapsePanel>
        </Collapse>
        <hr />
      </div>
    </Fragment>
  )
}

export default Accordion;