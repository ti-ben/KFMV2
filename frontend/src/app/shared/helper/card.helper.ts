import {CardConfig} from '@shared/model';

export class CardHelper {
  static defaultConfig(title = 'common.default.title'): CardConfig {
    return {
      headerConfig: {
        title: {label: title}
      },
      css: 'max-width-1400 p-large margin-auto margin-large'
    };
  }

  static siteConfig(title = 'common.default.title'): CardConfig {
    return {
      headerConfig: {
        title: {label: title}
      },
      css: 'max-width-600 p-large margin-auto margin-large'
    };
  }

  static gradeConfig(title = 'common.default.title'): CardConfig {
    return {
      headerConfig: {
        title: {label: title}
      },
      css: 'max-width-600 p-large margin-auto margin-large'
    };
  }

  static statusConfig(title = 'common.default.title'): CardConfig {
    return {
      headerConfig: {
        title: {label: title}
      },
      css: 'max-width-600 p-large margin-auto margin-large'
    };
  }

  static prestataireConfig(title = 'common.default.title'): CardConfig {
    return {
      headerConfig: {
        title: {label: title}
      },
      css: 'max-width-600 p-large margin-auto margin-large'
    };
  }

  static numberplateConfig(title = 'common.default.title'): CardConfig {
    return {
      headerConfig: {
        title: {label: title}
      },
      css: 'max-width-600 p-large margin-auto margin-large'
    };
  }
}
