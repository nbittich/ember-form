import { helper } from '@ember/component/helper';

export default helper(function formatDate([date] /*, named*/) {
  return date ? new Date(date).toLocaleString('fr-FR') : 'N/A';
});
