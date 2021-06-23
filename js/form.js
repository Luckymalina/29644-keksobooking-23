// Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
// Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на
// них или на их родительские блоки fieldset;
// Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс,
// а на её интерактивные элементы атрибуты disabled;

// 2.3. После заполнения всех данных, при нажатии на кнопку «Опубликовать», все данные из формы,
// включая изображения, с помощью AJAX-запроса отправляются на сервер
// https://23.javascript.pages.academy/keksobooking методом POST с типом multipart/form-data.
// 2.4. Страница реагирует на неправильно введённые значения в форму. Если данные, введённые в
//   форму, не соответствуют ограничениям, указанным в разделе, описывающем поля ввода, форму
//   невозможно отправить на сервер. При попытке отправить форму с неправильными данными, отправки
//   не происходит, а неверно заполненные поля подсвечиваются красной рамкой. Способ добавления рамки
//   и её стиль произвольные.
// 2.5. При успешной отправке формы или её очистке (нажатие на кнопку .ad-form__reset) страница,
// не перезагружаясь, переходит в состояние, когда:
// все заполненные поля возвращаются в изначальное состояние;
// фильтрация (состояние фильтров и отфильтрованные метки) сбрасывается;
// метка адреса возвращается в исходное положение;
// значение поля адреса корректируется соответственно исходному положению метки.

