function LangFactory() {
    
    var langObj = {
        analysis: 'Анализы',
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
        removeFeedConfirmDialogContent: 'Удаленный корм нельзя будет восстановить.',

        // general
        date: 'Дата',

        // harvest
        harvest: 'Заготовка',
        cutNumber: 'Номер укоса',

        // analysis
        number: 'Номер',
        isNaturalWet: 'Анализ на натуральную влажность',
        milkAcid: 'Молочная кислота',
        aceticAcid: 'Уксусная кислота',
        oilAcid: 'Масляная кислота',
        dve: 'Протеин, усваиваемый в кишечнике, DVE',
        oeb: 'Баланс расщепляемого протеина, OEB',
        vos: 'Переваримое органическое вещество, VOS',
        vcos: 'Переварримость органического вещества, VCOS',
        fos: 'Ферментируемое органическое вещество, FOS',
        nel: 'Чистая энергия на лактацию/молоко, NEL',
        nelvc: 'NEL-VC',

        //feeding
        feeding: 'Кормление'
    };

    return function (key) {
    	return langObj[key] || key;
    } 
}
// Register factory
angular.module('mytodo').factory('lang', LangFactory);