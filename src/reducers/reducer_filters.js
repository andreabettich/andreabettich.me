import data from './projects.json';
export default function filters() {
  const technologies = ['all'];
  data.forEach(item => {
    item.technologies.forEach(tech => {
      if (!technologies.includes(tech)) {
        technologies.push(tech);
      }
    });
  });
  return technologies;
}
