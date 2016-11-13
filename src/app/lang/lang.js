function LangFactory() {
    
    var langObj = {
        general: 'Основные',
        composition: 'Состав',
        year: 'Год',
        weight: 'Вес',
        opened: 'Открыт',
        storage: 'Хранение',
        field: 'Поле',
        done: 'Закончено',
        name: 'Имя',
        dryMaterial: 'Сухое вещество',
        removeFeedConfirmDialogTitle: 'Удалить этот корм ?',
        removeFeedConfirmDialogContent: 'Удаленный корм нельзя будет восстановить.'
    };

    return function (key) {
    	return langObj[key] || key;
    } 
}
// Register factory
angular.module('mytodo').factory('lang', LangFactory);