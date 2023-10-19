import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '管控下，轻松上网，安装软件',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        lsphunter支持在领创管控下安装程序
      </>
    ),
  },
  {
    title: '本地/云伪装',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        支持一键返回管控桌面,自身多种隐藏方式和隐藏拉起方式,配合root隐藏应用商店更佳。 云端上传伪装app列表,接收下发命令,配置正确后全自动执行
      </>
    ),
  },
  {
    title: '开源免费',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        核心代码完全开源，不收任何费用，欢迎贡献
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
