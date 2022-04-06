import { getCMSContent } from './CMSProvider'
import { cmsSections } from '../../components/cmsSections';

export function CMSSectionRender({ pageName }) {
  const sections = getCMSContent(`${pageName}.pageContent[0].section`);

  return sections.map((sectionProps) => {
    const Component = cmsSections[sectionProps.componentName];
    return (
      <Component key={sectionProps.id} {...sectionProps} />
    )
  })
}
