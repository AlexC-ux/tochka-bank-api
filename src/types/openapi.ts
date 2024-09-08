import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        /**
         * Account
         */
        export interface Account {
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
            /**
             * Статус объекта
             * An enumeration.
             * example:
             * Active
             */
            status: "Active" | "Suspended";
            /**
             * Время регистрации
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            createdAt: string; // date-time
            /**
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             * example:
             * LF0000000001
             */
            legalId: string;
        }
        /**
         * AccountDetailModel
         */
        export interface AccountDetailModel {
            /**
             * Наименование схемы идентификации счёта
             * example:
             * RU.CBR.AccountNumber
             */
            schemeName: string;
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            identification: string;
            /**
             * Название идентификатора счёта
             * example:
             * Основной текущий счёт
             */
            name: string;
        }
        /**
         * AccountListModel
         */
        export interface AccountListModel {
            /**
             * Account
             */
            Account: /* AccountModel */ AccountModel[];
        }
        /**
         * AccountListResponse
         */
        export interface AccountListResponse {
            /**
             * Account List
             */
            AccountList: /* Account */ Account[];
        }
        /**
         * AccountModel
         */
        export interface AccountModel {
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode: string;
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
            /**
             * Идентификатор транзитного счета
             */
            transitAccount?: string;
            /**
             * Статус счёта в форме кода
             * An enumeration.
             * example:
             * Enabled
             */
            status: "Enabled" | "Disabled" | "Deleted" | "ProForma" | "Pending";
            /**
             * Дата и время изменения статуса счёта. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            statusUpdateDateTime: string; // date-time
            /**
             * Валюта ведения счёта. Используется стандарт ISO 4217
             * example:
             * RUB
             */
            currency: string;
            /**
             * Тип счёта (физическое или юридическое лицо)
             * An enumeration.
             * example:
             * Personal
             */
            accountType: "Business" | "Personal";
            /**
             * Подтип счёта
             * An enumeration.
             * example:
             * CurrentAccount
             */
            accountSubType: "CreditCard" | "CurrentAccount" | "Loan" | "Mortgage" | "PrePaidCard" | "Savings" | "Special";
            /**
             * Дата регистрации счета
             * example:
             * 2020-10-20
             */
            registrationDate: string; // date
            /**
             * Account Details
             */
            accountDetails?: /* AccountDetailModel */ AccountDetailModel[];
        }
        /**
         * AccountResponseModel
         * Метод получения информации по счёту
         */
        export interface AccountResponseModel {
            Data: /* AccountModel */ AccountModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * AcquiringCreatePaymentOperationRequestDataModel
         */
        export interface AcquiringCreatePaymentOperationRequestDataModel {
            Data: /* AcquiringCreatePaymentOperationRequestModel */ AcquiringCreatePaymentOperationRequestModel;
        }
        /**
         * AcquiringCreatePaymentOperationRequestModel
         */
        export interface AcquiringCreatePaymentOperationRequestModel {
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode: string;
            /**
             * Сумма платежа
             * example:
             * 1234.00
             */
            amount: number;
            /**
             * Назначение платежа
             * example:
             * Перевод за оказанные услуги
             */
            purpose: string;
            /**
             * URL адрес, куда будет переправлен клиент после оплаты услуги
             * example:
             * https://example.com
             */
            redirectUrl?: string; // uri
            /**
             * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
             * example:
             * https://example.com/fail
             */
            failRedirectUrl?: string; // uri
            /**
             * Способ оплаты
             * example:
             * [
             *   "sbp",
             *   "card"
             * ]
             */
            paymentMode: [
                /**
                 * AcquiringPaymentMode
                 * An enumeration.
                 */
                AcquiringPaymentMode,
                .../**
                 * AcquiringPaymentMode
                 * An enumeration.
                 */
                AcquiringPaymentMode[]
            ];
            /**
             * Предложить покупателю сохранить карту
             * example:
             * true
             */
            saveCard?: boolean;
            /**
             * Идентификатор покупателя
             * example:
             * fedac807-078d-45ac-a43b-5c01c57edbf8
             */
            consumerId?: string;
        }
        /**
         * AcquiringCreatePaymentOperationResponseDataModel
         */
        export interface AcquiringCreatePaymentOperationResponseDataModel {
            Data: /* AcquiringCreatePaymentOperationResponseModel */ AcquiringCreatePaymentOperationResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * AcquiringCreatePaymentOperationResponseModel
         */
        export interface AcquiringCreatePaymentOperationResponseModel {
            /**
             * Назначение платежа
             * example:
             * Перевод за оказанные услуги
             */
            purpose: string;
            /**
             * Статус платежа
             * An enumeration.
             * example:
             * CREATED
             */
            status?: "CREATED";
            /**
             * Сумма платежа
             * example:
             * 1234.00
             */
            amount: number;
            /**
             * Идентификатор платежа
             * example:
             * 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
             */
            operationId: string;
            /**
             * Ссылка на оплату
             * example:
             * https://merch.bank24.int/order/?uuid=16ea4c54-bf1d-4e6a-a1ef-53ad55666e43
             */
            paymentLink: string;
            /**
             * Идентификатор покупателя
             * example:
             * fedac807-078d-45ac-a43b-5c01c57edbf8
             */
            consumerId?: string;
        }
        /**
         * AcquiringCreatePaymentOperationWithReceiptRequestDataModel
         */
        export interface AcquiringCreatePaymentOperationWithReceiptRequestDataModel {
            Data: /* AcquiringCreatePaymentOperationWithReceiptRequestModel */ AcquiringCreatePaymentOperationWithReceiptRequestModel;
        }
        /**
         * AcquiringCreatePaymentOperationWithReceiptRequestModel
         */
        export interface AcquiringCreatePaymentOperationWithReceiptRequestModel {
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode: string;
            /**
             * Сумма платежа
             * example:
             * 1234.00
             */
            amount: number;
            /**
             * Назначение платежа
             * example:
             * Перевод за оказанные услуги
             */
            purpose: string;
            /**
             * URL адрес, куда будет переправлен клиент после оплаты услуги
             * example:
             * https://example.com
             */
            redirectUrl?: string; // uri
            /**
             * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
             * example:
             * https://example.com/fail
             */
            failRedirectUrl?: string; // uri
            /**
             * Способ оплаты
             * example:
             * [
             *   "sbp",
             *   "card"
             * ]
             */
            paymentMode: [
                /**
                 * AcquiringPaymentMode
                 * An enumeration.
                 */
                AcquiringPaymentMode,
                .../**
                 * AcquiringPaymentMode
                 * An enumeration.
                 */
                AcquiringPaymentMode[]
            ];
            /**
             * Предложить покупателю сохранить карту
             * example:
             * true
             */
            saveCard?: boolean;
            /**
             * Идентификатор покупателя
             * example:
             * fedac807-078d-45ac-a43b-5c01c57edbf8
             */
            consumerId?: string;
            /**
             * Система налогообложения
             * An enumeration.
             * example:
             * osn
             */
            taxSystemCode?: "osn" | "usn_income" | "usn_income_outcome" | "esn" | "patent";
            /**
             * Идентификатор торговой точки в интернет-эквайринге
             * example:
             * 200000000001056
             */
            merchantId?: string;
            /**
             * Данные покупателя
             */
            Client: {
                /**
                 * Для юрлица — название организации, для ИП и физического лица — ФИО
                 * example:
                 * Иванов Иван Иванович
                 */
                name?: string;
                /**
                 * Email покупателя, на который будет отправлен чек
                 * example:
                 * ivanov@mail.com
                 */
                email: string; // email
                /**
                 * Телефон пользователя для отправки чека.
                 * example:
                 * +7999999999
                 */
                phone?: string;
            };
            /**
             * Список товаров в заказе
             */
            Items: [
                /* ReceiptItemModel */ ReceiptItemModel,
                .../* ReceiptItemModel */ ReceiptItemModel[]
            ];
        }
        /**
         * AcquiringCreatePaymentOperationWithReceiptResponseDataModel
         */
        export interface AcquiringCreatePaymentOperationWithReceiptResponseDataModel {
            Data: /* AcquiringCreatePaymentOperationWithReceiptResponseModel */ AcquiringCreatePaymentOperationWithReceiptResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * AcquiringCreatePaymentOperationWithReceiptResponseModel
         */
        export interface AcquiringCreatePaymentOperationWithReceiptResponseModel {
            /**
             * Назначение платежа
             * example:
             * Перевод за оказанные услуги
             */
            purpose: string;
            /**
             * Статус платежа
             * An enumeration.
             * example:
             * CREATED
             */
            status?: "CREATED";
            /**
             * Сумма платежа
             * example:
             * 1234.00
             */
            amount: number;
            /**
             * Идентификатор платежа
             * example:
             * 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
             */
            operationId: string;
            /**
             * Ссылка на оплату
             * example:
             * https://merch.bank24.int/order/?uuid=16ea4c54-bf1d-4e6a-a1ef-53ad55666e43
             */
            paymentLink: string;
            /**
             * Идентификатор покупателя
             * example:
             * fedac807-078d-45ac-a43b-5c01c57edbf8
             */
            consumerId?: string;
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode: string;
            /**
             * URL адрес, куда будет переправлен клиент после оплаты услуги
             * example:
             * https://example.com
             */
            redirectUrl?: string; // uri
            /**
             * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
             * example:
             * https://example.com/fail
             */
            failRedirectUrl?: string; // uri
            /**
             * Способ оплаты
             * example:
             * [
             *   "sbp",
             *   "card"
             * ]
             */
            paymentMode: [
                /**
                 * AcquiringPaymentMode
                 * An enumeration.
                 */
                AcquiringPaymentMode,
                .../**
                 * AcquiringPaymentMode
                 * An enumeration.
                 */
                AcquiringPaymentMode[]
            ];
            /**
             * Идентификатор торговой точки в интернет-эквайринге
             * example:
             * 200000000001056
             */
            merchantId?: string;
            /**
             * Система налогообложения
             * An enumeration.
             * example:
             * osn
             */
            taxSystemCode?: "osn" | "usn_income" | "usn_income_outcome" | "esn" | "patent";
            /**
             * Данные покупателя
             */
            Client: {
                /**
                 * Для юрлица — название организации, для ИП и физического лица — ФИО
                 * example:
                 * Иванов Иван Иванович
                 */
                name?: string;
                /**
                 * Email покупателя, на который будет отправлен чек
                 * example:
                 * ivanov@mail.com
                 */
                email: string; // email
                /**
                 * Телефон пользователя для отправки чека.
                 * example:
                 * +7999999999
                 */
                phone?: string;
            };
            /**
             * Список товаров в заказе
             */
            Items: [
                /* ReceiptItemModel */ ReceiptItemModel,
                .../* ReceiptItemModel */ ReceiptItemModel[]
            ];
        }
        /**
         * AcquiringCreatedStatus
         * An enumeration.
         */
        export type AcquiringCreatedStatus = "CREATED";
        /**
         * AcquiringGetPaymentOperationInfoResponseDataModel
         */
        export interface AcquiringGetPaymentOperationInfoResponseDataModel {
            Data: /* AcquiringGetPaymentOperationListResponseModel */ AcquiringGetPaymentOperationListResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * AcquiringGetPaymentOperationListItemModel
         */
        export interface AcquiringGetPaymentOperationListItemModel {
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode: string;
            /**
             * Система налогообложения
             * Перечисление для выдачи результатов из openapi.
             * example:
             * osn
             */
            taxSystemCode?: "osn" | "usn_income" | "usn_income_outcome" | "esn" | "patent" | "envd";
            /**
             * Тип оплаты
             * Присутствует, если оплата произведена
             * example:
             * card
             */
            paymentType?: "sbp" | "card";
            /**
             * Идентификатор платежа в процессинге или СБП
             * example:
             * A22031016256670100000533E625FCB3
             */
            paymentId?: string;
            /**
             * Идентификатор транзакции в СБП
             * Используется для возврата при оплате по СБП
             * example:
             * 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
             */
            transactionId?: string;
            /**
             * Дата и время создания операции. Используется стандарт ISO8601
             * example:
             * 2022-10-18T08:28:59+00:00
             */
            createdAt: string; // date-time
            /**
             * Способ оплаты
             * example:
             * [
             *   "sbp",
             *   "card"
             * ]
             */
            paymentMode?: [
                /**
                 * AcquiringPaymentMode
                 * An enumeration.
                 */
                AcquiringPaymentMode,
                .../**
                 * AcquiringPaymentMode
                 * An enumeration.
                 */
                AcquiringPaymentMode[]
            ];
            /**
             * URL адрес, куда будет переправлен клиент после оплаты услуги
             * example:
             * https://example.com
             */
            redirectUrl?: string; // uri
            /**
             * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
             * example:
             * https://example.com/fail
             */
            failRedirectUrl?: string; // uri
            /**
             * Данные покупателя
             */
            Client?: {
                /**
                 * Для юрлица — название организации, для ИП и физического лица — ФИО
                 * example:
                 * Иванов Иван Иванович
                 */
                name?: string;
                /**
                 * Email покупателя, на который будет отправлен чек
                 * example:
                 * ivanov@mail.com
                 */
                email: string; // email
                /**
                 * Телефон пользователя для отправки чека.
                 * example:
                 * +7999999999
                 */
                phone?: string;
            };
            /**
             * Список товаров в заказе
             */
            Items?: [
                /* ReceiptItemResponseModel */ ReceiptItemResponseModel,
                .../* ReceiptItemResponseModel */ ReceiptItemResponseModel[]
            ];
            /**
             * Назначение платежа
             * Отсутствует, если при создании платежа назначение не было указано
             * example:
             * Перевод за оказанные услуги
             */
            purpose?: string;
            /**
             * Сумма платежа
             * example:
             * 1234.00
             */
            amount: number;
            /**
             * Статус платежа
             * An enumeration.
             * example:
             * CREATED
             */
            status: "CREATED" | "APPROVED" | "ON-REFUND" | "REFUNDED" | "EXPIRED" | "REFUNDED_PARTIALLY";
            /**
             * Идентификатор платежа
             * example:
             * 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
             */
            operationId: string;
            /**
             * Ссылка на оплату
             * example:
             * https://merch.bank24.int/order/?uuid=16ea4c54-bf1d-4e6a-a1ef-53ad55666e43
             */
            paymentLink: string;
            /**
             * Идентификатор торговой точки в интернет-эквайринге
             * example:
             * 200000000001056
             */
            merchantId?: string;
            /**
             * Идентификатор покупателя
             * example:
             * fedac807-078d-45ac-a43b-5c01c57edbf8
             */
            consumerId?: string;
        }
        /**
         * AcquiringGetPaymentOperationListResponseDataModel
         */
        export interface AcquiringGetPaymentOperationListResponseDataModel {
            Data: /* AcquiringGetPaymentOperationListResponseModel */ AcquiringGetPaymentOperationListResponseModel;
            Links: /* PaginatedLinkModel */ PaginatedLinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * AcquiringGetPaymentOperationListResponseModel
         */
        export interface AcquiringGetPaymentOperationListResponseModel {
            /**
             * Operation
             */
            Operation: /* AcquiringGetPaymentOperationListItemModel */ AcquiringGetPaymentOperationListItemModel[];
        }
        /**
         * AcquiringPaymentMode
         * An enumeration.
         */
        export type AcquiringPaymentMode = "sbp" | "card";
        /**
         * AcquiringPaymentOperationRefundModel
         */
        export interface AcquiringPaymentOperationRefundModel {
            /**
             * Оформлен ли возврат
             * example:
             * true
             */
            isRefund: boolean;
        }
        /**
         * AcquiringPaymentOperationRefundResponseModel
         */
        export interface AcquiringPaymentOperationRefundResponseModel {
            Data: /* AcquiringPaymentOperationRefundModel */ AcquiringPaymentOperationRefundModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * AcquiringPaymentOrderRefundRequestDataModel
         */
        export interface AcquiringPaymentOrderRefundRequestDataModel {
            Data: /* AcquiringPaymentOrderRefundRequestModel */ AcquiringPaymentOrderRefundRequestModel;
        }
        /**
         * AcquiringPaymentOrderRefundRequestModel
         */
        export interface AcquiringPaymentOrderRefundRequestModel {
            /**
             * Сумма платежа
             * Не больше суммы оплаты
             * example:
             * 1234.00
             */
            amount: number;
        }
        /**
         * AcquiringPaymentStatus
         * An enumeration.
         */
        export type AcquiringPaymentStatus = "CREATED" | "APPROVED" | "ON-REFUND" | "REFUNDED" | "EXPIRED" | "REFUNDED_PARTIALLY";
        /**
         * AcquiringRetailerListModel
         */
        export interface AcquiringRetailerListModel {
            /**
             * Retailer
             */
            Retailer: /* AcquiringRetailerModel */ AcquiringRetailerModel[];
        }
        /**
         * AcquiringRetailerListResponseModel
         */
        export interface AcquiringRetailerListResponseModel {
            Data: /* AcquiringRetailerListModel */ AcquiringRetailerListModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * AcquiringRetailerModel
         */
        export interface AcquiringRetailerModel {
            /**
             * Статус регистрации
             * An enumeration.
             * example:
             * REG
             */
            status: "NEW" | "ADDRESS_DADATA" | "OPEN_ACCOUNT" | "TWPG_SENDED" | "RETAILER_CREATED" | "TERMINAL_CREATED" | "FILE_SENT" | "REG" | "CLOSE";
            /**
             * Статус готовности к работе
             * example:
             * true
             */
            isActive: boolean;
            /**
             * Код МСС
             * example:
             * 5111
             */
            mcc: string;
            /**
             * Комиссия
             * example:
             * 2
             */
            rate: number;
            /**
             * Наименование
             * example:
             * ООО Альтер
             */
            name: string;
            /**
             * Сайт регистрации
             * example:
             * https://alter.ru
             */
            url?: string;
            /**
             * ID мерчанта
             * Может отсутствовать при значениях поля status: NEW, ADDRESS_DADATA и OPEN_ACCOUNT
             * example:
             * 200000000001056
             */
            merchantId?: string;
            /**
             * ID терминала
             * Будет заполнен при значениях поля status: TERMINAL_CREATED, FILE_SENT, REG
             * example:
             * 20000032
             */
            terminalId?: string;
        }
        /**
         * AcquiringRetailerStatus
         * An enumeration.
         */
        export type AcquiringRetailerStatus = "NEW" | "ADDRESS_DADATA" | "OPEN_ACCOUNT" | "TWPG_SENDED" | "RETAILER_CREATED" | "TERMINAL_CREATED" | "FILE_SENT" | "REG" | "CLOSE";
        /**
         * ActModel
         */
        export interface ActModel {
            /**
             * Список позиций
             */
            Positions: [
                /* PositionModel */ PositionModel,
                .../* PositionModel */ PositionModel[]
            ];
            /**
             * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
             * example:
             * 2010-10-29
             */
            date?: string; // date
            /**
             * Сумма всех позиций с НДС
             * example:
             * 1234.56
             */
            totalAmount: number;
            /**
             * Сумма НДС
             * example:
             * 1234.56
             */
            totalNds?: number;
            /**
             * Номер акта
             * example:
             * 1
             */
            number: string;
            /**
             * Документ, на основании которого вы выставляете акт
             * example:
             * Основание платежа
             */
            basedOn?: string;
        }
        /**
         * ActivateCashboxQrCodeRequestDataModel
         */
        export interface ActivateCashboxQrCodeRequestDataModel {
            Data: /* ActivateCashboxQrCodeRequestModel */ ActivateCashboxQrCodeRequestModel;
        }
        /**
         * ActivateCashboxQrCodeRequestModel
         */
        export interface ActivateCashboxQrCodeRequestModel {
            /**
             * Сумма в копейках.
             * example:
             * 500000
             */
            amount: number;
            /**
             * Currency
             * Валюта операции
             */
            currency?: string;
            /**
             * Paymentpurpose
             * Назначение платежа
             * example:
             * Оплата по счету № 1 от 01.01.2021. Без НДС
             */
            paymentPurpose?: string;
            /**
             * Период использования QR-кода в минутах
             * example:
             * 7
             */
            ttl?: number;
        }
        /**
         * ActivateCashboxQrCodeResponseDataModel
         */
        export interface ActivateCashboxQrCodeResponseDataModel {
            Data: /* ActivateCashboxQrCodeResponseModel */ ActivateCashboxQrCodeResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * ActivateCashboxQrCodeResponseModel
         */
        export interface ActivateCashboxQrCodeResponseModel {
            /**
             * Идентификатор QR-кода в СБП
             * example:
             * AS000000000000000000000000000001
             */
            qrcId: string;
            /**
             * Сумма в копейках
             * example:
             * 0
             */
            amount: number;
            /**
             * Валюта операции
             * example:
             * RUB
             */
            currency?: string;
            /**
             * Идентификатор активных значений параметров QR-кода
             */
            paramsId: string;
            /**
             * Дополнительная информация от ТСП
             * example:
             * ?
             */
            paymentPurpose?: string;
        }
        /**
         * ApiVersion
         * An enumeration.
         */
        export type ApiVersion = "v1.0";
        /**
         * PaymentStatusEnum
         * An enumeration.
         */
        export type ApplicationInvoiceModelsEnumsPaymentStatusEnum = "payment_waiting" | "payment_expired" | "payment_paid";
        /**
         * AccountListResponseModel
         * Метод получения списка доступных счетов
         */
        export interface ApplicationOpenBankingModelsExternalModelsAccountListResponseModel {
            Data: /* AccountListModel */ AccountListModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * MediaTypeEnum
         * An enumeration.
         */
        export type ApplicationSbpModelsEnumsMediaTypeEnum = "image/png" | "image/svg+xml";
        /**
         * PaymentStatusEnum
         * **Описание возможных статусов платежа**
         *   - `Confirming` - операция в процессе подтверждения ОПКЦ СБП
         *   - `Confirmed` - операция подтверждена
         *   - `Initiated` - операция отправлена на обработку
         *   - `Accepting` - операция в обработке ОПКЦ СБП
         *   - `Accepted` - операция успешно завершена
         *   - `InProgress` - операция в обработке РЦ СБП
         *   - `Rejected` - операция отклонена
         *   - `Error` - ошибка выполнения операции
         *   - `Timeout` - тайм-аут выполнения операции
         */
        export type ApplicationSbpModelsEnumsPaymentStatusEnum = "Confirming" | "Confirmed" | "Initiated" | "Accepting" | "Accepted" | "InProgress" | "Rejected" | "Error" | "Timeout";
        /**
         * QrTypeEnum
         * 01 - QR-Static (QR наклейка)
         * 02 - QR-Dynamic (QR на кассе)
         */
        export type ApplicationSbpModelsEnumsQrTypeEnum = "01" | "02";
        /**
         * AccountListResponseModel
         */
        export interface ApplicationSbpModelsResponseModelsSbpAccountListResponseModel {
            Data: /* AccountListResponse */ AccountListResponse;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * BadRequestError
         */
        export interface BadRequestError {
            /**
             * Низкоуровневое текстовое описание ошибки
             * example:
             * HTTPBadRequest
             */
            errorCode: string;
            /**
             * Описание ошибки. Обрезается если длина ошибки превышает максимальное значение
             * example:
             * Something going wrong
             */
            message: string;
            /**
             * URL для помощи в устранении проблемы
             * example:
             * "http://enter.tochka.com/open-banking/docs"
             */
            url: string;
        }
        /**
         * BadRequestErrorResponse
         */
        export interface BadRequestErrorResponse {
            /**
             * Высокоуровневый текстовый код ошибки, необходимый для классификации.
             * example:
             * 400
             */
            code: string;
            /**
             * Уникальный идентификатор ошибки, для целей аудита
             * example:
             * c397b21a-d998-4c4d-9471-e60eaf816b87
             */
            id: string;
            /**
             * Краткое сообщение об ошибке.
             * example:
             * Что-то пошло не так
             */
            message: string;
            /**
             * Errors
             */
            Errors: /* BadRequestError */ BadRequestError[];
        }
        /**
         * BalanceAmountModel
         */
        export interface BalanceAmountModel {
            /**
             * Сумма
             * example:
             * 1234.56
             */
            amount: number;
            /**
             * Валюта ведения счета. Используется стандарт ISO 4217
             * example:
             * RUB
             */
            currency: string;
        }
        /**
         * BalanceListModel
         */
        export interface BalanceListModel {
            /**
             * Balance
             */
            Balance: /* BalanceModel */ BalanceModel[];
        }
        /**
         * BalanceListResponseModel
         * Метод получения баланса
         */
        export interface BalanceListResponseModel {
            Data: /* BalanceListModel */ BalanceListModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * BalanceModel
         */
        export interface BalanceModel {
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
            /**
             * Определяет является баланс кредитовым или дебетовым
             * An enumeration.
             * example:
             * Credit
             */
            creditDebitIndicator: "Credit" | "Debit";
            /**
             * Тип баланса, заполняется согласно ISO 20022
             * **Описание типов балансов**
             *
             *   - `OpeningAvailable` - Начальный остаток
             *   - `ClosingAvailable` - Доступный баланс
             *   - `Expected` - Сумма заблокированных средств
             *   - `OverdraftAvailable` - Доступный лимит по овердрафту
             * example:
             * OpeningAvailable
             */
            type: "OpeningAvailable" | "ClosingAvailable" | "Expected" | "OverdraftAvailable";
            /**
             * Дата и время построения отчета. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            dateTime: string; // date-time
            Amount: /* BalanceAmountModel */ BalanceAmountModel;
        }
        /**
         * BooleanResponse
         */
        export interface BooleanResponse {
            /**
             * Статус операции
             * example:
             * true
             */
            result: boolean;
        }
        /**
         * BooleanResponseModel
         */
        export interface BooleanResponseModel {
            Data: /* BooleanResponse */ BooleanResponse;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * CapabilitiesEnum
         * `001` - только QR Static
         * `010` - только QR Dynamic
         * `011` - QR Static и QR Dynamic
         * `100` - Только QR Subscription
         * `101` - QR Subscription и QR Static
         * `110` - QR Subscription и QR Dynamic
         * `111` - QR Static, QR Dynamic и QR Subscription
         */
        export type CapabilitiesEnum = "001" | "010" | "011" | "100" | "101" | "110" | "111";
        /**
         * CardTransactionAmountModel
         */
        export interface CardTransactionAmountModel {
            /**
             * Amount
             * Сумма транзакции
             * example:
             * 1234.56
             */
            amount: number;
            /**
             * Currency
             * Валюта транзакции, используется ISO 4217
             * example:
             * RUB
             */
            currency: string;
        }
        /**
         * CardTransactionListModel
         */
        export interface CardTransactionListModel {
            /**
             * Transactions
             */
            Transactions: /* CardTransactionModel */ CardTransactionModel[];
        }
        /**
         * CardTransactionModel
         */
        export interface CardTransactionModel {
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
            /**
             * Pan
             * Маскированный номер карты транзакции
             */
            pan: string;
            /**
             * Дата и время транзакции. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            dateTime: string; // date-time
            /**
             * Amount
             * Оригинальная сумма и валюта
             */
            Amount: {
                /**
                 * Amount
                 * Сумма транзакции
                 * example:
                 * 1234.56
                 */
                amount: number;
                /**
                 * Currency
                 * Валюта транзакции, используется ISO 4217
                 * example:
                 * RUB
                 */
                currency: string;
            };
            /**
             * Account Amount
             * Сумма и валюта в валюте счета
             */
            AccountAmount: {
                /**
                 * Amount
                 * Сумма транзакции
                 * example:
                 * 1234.56
                 */
                amount: number;
                /**
                 * Currency
                 * Валюта транзакции, используется ISO 4217
                 * example:
                 * RUB
                 */
                currency: string;
            };
            TerminalData: /* CardTransactionTerminalData */ CardTransactionTerminalData;
        }
        /**
         * CardTransactionTerminalData
         */
        export interface CardTransactionTerminalData {
            /**
             * City
             * Город терминала
             * example:
             * Perm
             */
            city?: string;
            /**
             * Location
             * Адрес терминала
             * example:
             * Ekaterinburg
             */
            location?: string;
            /**
             * Owner
             * Название торговой точки
             */
            owner?: string;
        }
        /**
         * CardTransactionsListResponseModel
         */
        export interface CardTransactionsListResponseModel {
            Data: /* CardTransactionListModel */ CardTransactionListModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * CashAccountInfoModel
         */
        export interface CashAccountInfoModel {
            /**
             * Название схемы
             * example:
             * RU.CBR.PAN
             */
            schemeName: string;
            /**
             * Идентификатор счета(может отсутствовать в валютном платеже)
             * example:
             * 60000000000000000001
             */
            identification?: string;
        }
        /**
         * CashboxQrCodeOutputCommission
         */
        export interface CashboxQrCodeOutputCommission {
            /**
             * MCC код
             */
            mcc?: string;
            /**
             * Размер комиссии в процентах
             */
            percent?: number;
            /**
             * Описание
             */
            description?: string;
        }
        /**
         * CashboxQrCodeResponseModel
         */
        export interface CashboxQrCodeResponseModel {
            /**
             * Payload зарегистрированного QR-кода в СБП
             * example:
             * https://qr.nspk.ru/AS1000670LSS7DN18SJQDNP4B05KLJL2?type=01&bank=100000000001&sum=10000&cur=RUB&crc=C08B
             */
            payload: string;
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
            /**
             * Идентификатор ТСП в СБП
             * example:
             * MF0000000001
             */
            merchantId: string;
            /**
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             * example:
             * LF0000000001
             */
            legalId: string;
            /**
             * Время регистрации
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            createdAt: string; // date-time
            /**
             * Идентификатор QR-кода в СБП
             * example:
             * AS000000000000000000000000000001
             */
            qrcId: string;
            /**
             * Сумма в копейках
             * example:
             * 0
             */
            amount?: number;
            /**
             * Валюта операции
             * example:
             * RUB
             */
            currency?: string;
            /**
             * Дополнительная информация от ТСП
             * example:
             * ?
             */
            paymentPurpose?: string;
            /**
             * Идентификатор активных значений параметров QR-кода
             */
            paramsId?: string;
            /**
             * Период использования в минутах.
             * example:
             * 20
             */
            ttl?: number;
            commission?: /* CashboxQrCodeOutputCommission */ CashboxQrCodeOutputCommission;
            image?: /* QrCodeContent */ QrCodeContent;
            /**
             * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
             */
            redirectUrl?: string; // uri
        }
        /**
         * ChangeCashboxQRCodeAccountRequestDataModel
         */
        export interface ChangeCashboxQRCodeAccountRequestDataModel {
            Data: /* ChangeCashboxQRCodeAccountRequestModel */ ChangeCashboxQRCodeAccountRequestModel;
        }
        /**
         * ChangeCashboxQRCodeAccountRequestModel
         */
        export interface ChangeCashboxQRCodeAccountRequestModel {
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
        }
        /**
         * ChangeCashboxQRCodeAccountResponseDataModel
         */
        export interface ChangeCashboxQRCodeAccountResponseDataModel {
            Data: /* ChangeCashboxQRCodeAccountResponseModel */ ChangeCashboxQRCodeAccountResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * ChangeCashboxQRCodeAccountResponseModel
         */
        export interface ChangeCashboxQRCodeAccountResponseModel {
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
            /**
             * Идентификатор QR-кода в СБП
             * example:
             * AS000000000000000000000000000001
             */
            qrcId: string;
        }
        /**
         * ClosingDocumentCreateRequestDataModel
         */
        export interface ClosingDocumentCreateRequestDataModel {
            Data: /* ClosingDocumentCreateRequestModel */ ClosingDocumentCreateRequestModel;
        }
        /**
         * ClosingDocumentCreateRequestModel
         */
        export interface ClosingDocumentCreateRequestModel {
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode: string;
            /**
             * Сторона заказчика/покупателя в сделке в документе
             */
            SecondSide: {
                /**
                 * Account Id
                 * example:
                 * 40817810802000000008/044525104
                 */
                accountId?: string;
                /**
                 * Юридический адрес
                 * example:
                 * 624205, РОССИЯ, СВЕРДЛОВСКАЯ обл, ЛЕСНОЙ г, ЛЕНИНА ул, ДОМ 96, офис КВ. 19
                 */
                legalAddress?: string;
                /**
                 * КПП
                 * example:
                 * 668101001
                 */
                kpp?: string;
                /**
                 * Название банка
                 * example:
                 * ООО БАНК ТОЧКА
                 */
                bankName?: string;
                /**
                 * Корреспондентский счет банка
                 * example:
                 * 30101810745374525104
                 */
                bankCorrAccount?: string;
                /**
                 * ИНН покупателя или заказчика
                 * example:
                 * 660000000000
                 */
                taxCode: string;
                /**
                 * Тип покупателя или заказчика
                 * An enumeration.
                 * example:
                 * company
                 */
                type: "ip" | "company";
                /**
                 * Наименование покупателя или заказчика
                 * example:
                 * ООО Студия дизайна М-АРТ
                 */
                secondSideName?: string;
            };
            /**
             * ID родительского документа
             * example:
             * 1cf95c4f-e794-4407-bac4-0829f19bd2be
             */
            documentId?: string;
            /**
             * Содержимое закрывающего документа
             */
            Content: /* Содержимое закрывающего документа */ /* ContentAct */ ContentAct | /* ContentPackingList */ ContentPackingList | /* ContentInvoicef */ ContentInvoicef;
        }
        /**
         * ConsentListModel
         */
        export interface ConsentListModel {
            /**
             * Consent
             */
            Consent: /* ConsentResponseModel */ ConsentResponseModel[];
        }
        /**
         * ConsentListResponse
         */
        export interface ConsentListResponse {
            Data: /* ConsentListModel */ ConsentListModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * ConsentModel
         */
        export interface ConsentModel {
            /**
             * Статус разрешения
             * An enumeration.
             * example:
             * AwaitingAuthorisation
             */
            status?: "AwaitingAuthorisation" | "Authorised" | "Rejected" | "Revoked";
            /**
             * Дата и время создания статуса ресурса. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            creationDateTime?: string; // date-time
            /**
             * Дата и время обновления статуса ресурса. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            statusUpdateDateTime?: string; // date-time
            /**
             * Указание типов данных доступа.
             * example:
             * [
             *   "ReadAccountsBasic"
             * ]
             */
            permissions: /**
             * ExternalConsentTypeEnum
             * An enumeration.
             */
            ExternalConsentTypeEnum[];
            /**
             * Дата и время истечения срока действия разрешений. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            expirationDateTime?: string; // date-time
            /**
             * Уникальный идентификатор, предназначенный для идентификации разрешения
             * example:
             * tochka-intent-88379
             */
            consentId: string;
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode?: string;
            /**
             * Название приложения
             * example:
             * Test
             */
            applicationName?: string;
            /**
             * ID приложения в oAuth
             * example:
             * Test
             */
            clientId?: string;
        }
        /**
         * ConsentRequest
         */
        export interface ConsentRequest {
            Data: /* ConsentRequestModel */ ConsentRequestModel;
            /**
             * Risks
             */
            Risks?: {
                [key: string]: any;
            };
        }
        /**
         * ConsentRequestModel
         */
        export interface ConsentRequestModel {
            /**
             * Статус разрешения
             * An enumeration.
             * example:
             * AwaitingAuthorisation
             */
            status?: "AwaitingAuthorisation" | "Authorised" | "Rejected" | "Revoked";
            /**
             * Дата и время создания статуса ресурса. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            creationDateTime?: string; // date-time
            /**
             * Дата и время обновления статуса ресурса. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            statusUpdateDateTime?: string; // date-time
            /**
             * Указание типов данных доступа.
             * example:
             * [
             *   "ReadAccountsBasic"
             * ]
             */
            permissions: /**
             * ExternalConsentTypeEnum
             * An enumeration.
             */
            ExternalConsentTypeEnum[];
            /**
             * Дата и время истечения срока действия разрешений. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            expirationDateTime?: string; // date-time
        }
        /**
         * ConsentResponse
         */
        export interface ConsentResponse {
            Data: /* ConsentModel */ ConsentModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * ConsentResponseModel
         */
        export interface ConsentResponseModel {
            /**
             * Статус разрешения
             * An enumeration.
             * example:
             * AwaitingAuthorisation
             */
            status?: "AwaitingAuthorisation" | "Authorised" | "Rejected" | "Revoked";
            /**
             * Дата и время создания статуса ресурса. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            creationDateTime?: string; // date-time
            /**
             * Дата и время обновления статуса ресурса. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            statusUpdateDateTime?: string; // date-time
            /**
             * Указание типов данных доступа.
             * example:
             * [
             *   "ReadAccountsBasic"
             * ]
             */
            permissions: /**
             * ConsentTypeEnum
             * An enumeration.
             */
            ConsentTypeEnum[];
            /**
             * Дата и время истечения срока действия разрешений. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            expirationDateTime?: string; // date-time
            /**
             * Уникальный идентификатор, предназначенный для идентификации разрешения
             * example:
             * tochka-intent-88379
             */
            consentId: string;
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode?: string;
            /**
             * Название приложения
             * example:
             * Test
             */
            applicationName?: string;
            /**
             * ID приложения в oAuth
             * example:
             * Test
             */
            clientId?: string;
            /**
             * Isvalid
             * Показывает истек срок разрешения или нет
             */
            isValid?: boolean;
        }
        /**
         * ConsentStatusEnum
         * An enumeration.
         */
        export type ConsentStatusEnum = "AwaitingAuthorisation" | "Authorised" | "Rejected" | "Revoked";
        /**
         * ConsentTypeEnum
         * An enumeration.
         */
        export type ConsentTypeEnum = "ReadAccountsBasic" | "ReadAccountsDetail" | "ReadBalances" | "ReadStatements" | "ReadTransactionsBasic" | "ReadTransactionsCredits" | "ReadTransactionsDebits" | "ReadTransactionsDetail" | "ReadCustomerData" | "ReadSBPData" | "EditSBPData" | "ReadSBPData1C" | "EditSBPData1C" | "CreatePaymentForSign" | "CreatePaymentOrder" | "ReadAcquiringData" | "MakeAcquiringOperation" | "ManageInvoiceData" | "ManageWebhookData";
        /**
         * ContentAct
         */
        export interface ContentAct {
            /**
             * Содержимое акта
             */
            Act: {
                /**
                 * Список позиций
                 */
                Positions: [
                    /* PositionModel */ PositionModel,
                    .../* PositionModel */ PositionModel[]
                ];
                /**
                 * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
                 * example:
                 * 2010-10-29
                 */
                date?: string; // date
                /**
                 * Сумма всех позиций с НДС
                 * example:
                 * 1234.56
                 */
                totalAmount: number;
                /**
                 * Сумма НДС
                 * example:
                 * 1234.56
                 */
                totalNds?: number;
                /**
                 * Номер акта
                 * example:
                 * 1
                 */
                number: string;
                /**
                 * Документ, на основании которого вы выставляете акт
                 * example:
                 * Основание платежа
                 */
                basedOn?: string;
            };
        }
        /**
         * ContentInvoice
         */
        export interface ContentInvoice {
            /**
             * Содержимое счета на оплату
             */
            Invoice: {
                /**
                 * Список позиций
                 */
                Positions: [
                    /* PositionModel */ PositionModel,
                    .../* PositionModel */ PositionModel[]
                ];
                /**
                 * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
                 * example:
                 * 2010-10-29
                 */
                date?: string; // date
                /**
                 * Сумма всех позиций с НДС
                 * example:
                 * 1234.56
                 */
                totalAmount: number;
                /**
                 * Сумма НДС
                 * example:
                 * 1234.56
                 */
                totalNds?: number;
                /**
                 * Номер выставляемого счёта
                 * example:
                 * 1
                 */
                number: string;
                /**
                 * Документ, на основании которого выставляется счёт
                 * example:
                 * Основание платежа
                 */
                basedOn?: string;
                /**
                 * Комментарий
                 * example:
                 * Комментарий к платежу
                 */
                comment?: string;
                /**
                 * Срок оплаты в виде даты, приведенной к часовому поясу Москвы
                 * example:
                 * 2020-01-20
                 */
                paymentExpiryDate?: string; // date
            };
        }
        /**
         * ContentInvoicef
         */
        export interface ContentInvoicef {
            /**
             * Содержимое счета-фактуры
             */
            Invoicef: {
                /**
                 * Список позиций
                 */
                Positions: [
                    /* PositionModel */ PositionModel,
                    .../* PositionModel */ PositionModel[]
                ];
                /**
                 * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
                 * example:
                 * 2010-10-29
                 */
                date?: string; // date
                /**
                 * Сумма всех позиций с НДС
                 * example:
                 * 1234.56
                 */
                totalAmount: number;
                /**
                 * Сумма НДС
                 * example:
                 * 1234.56
                 */
                totalNds?: number;
                /**
                 * Номер счёт-фактуры
                 * example:
                 * 1
                 */
                number: string;
                /**
                 * Документ, на основании которого выставляется счёт
                 * example:
                 * Основание платежа
                 */
                basedOn?: string;
            };
        }
        /**
         * ContentPackingList
         */
        export interface ContentPackingList {
            /**
             * Содержимое товарной накладной
             */
            PackingList: {
                /**
                 * Список позиций
                 */
                Positions: [
                    /* PositionModel */ PositionModel,
                    .../* PositionModel */ PositionModel[]
                ];
                /**
                 * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
                 * example:
                 * 2010-10-29
                 */
                date?: string; // date
                /**
                 * Сумма всех позиций с НДС
                 * example:
                 * 1234.56
                 */
                totalAmount: number;
                /**
                 * Сумма НДС
                 * example:
                 * 1234.56
                 */
                totalNds?: number;
                /**
                 * Номер товарной накладной
                 * example:
                 * 1
                 */
                number: string;
                /**
                 * Документ, на основании которого вы выставляете накладную
                 * example:
                 * Основание платежа
                 */
                basedOn?: string;
            };
        }
        /**
         * ContractorBankInfoModel
         */
        export interface ContractorBankInfoModel {
            /**
             * БИК/SWIFT банка агента
             * example:
             * RU.CBR.BIK
             */
            schemeName?: string;
            /**
             * БИК/SWIFT банка агента
             * example:
             * 000555777
             */
            identification?: string;
            /**
             * Номер кор. счета банка агента
             * example:
             * 000555777
             */
            accountIdentification?: string;
            /**
             * Наименование банка агента
             * example:
             * ПАО...
             */
            name?: string;
        }
        /**
         * ContractorInfoModel
         */
        export interface ContractorInfoModel {
            /**
             * ИНН контрагента
             * example:
             * 660000000000
             */
            inn?: string;
            /**
             * Наименование контрагента
             * example:
             * Индивидуальный Предприниматель Тест
             */
            name?: string;
            /**
             * КПП контрагента
             * example:
             * 660000000
             */
            kpp?: string;
        }
        /**
         * CounterpartTypeEnum
         * An enumeration.
         */
        export type CounterpartTypeEnum = "ip" | "company";
        /**
         * CustomerCodeAndBankCode
         */
        export interface CustomerCodeAndBankCode {
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode: string;
            /**
             * БИК банка
             * example:
             * 044525104
             */
            bankCode: string;
        }
        /**
         * CustomerCodeAndBankCodeRequest
         */
        export interface CustomerCodeAndBankCodeRequest {
            Data: /* CustomerCodeAndBankCode */ CustomerCodeAndBankCode;
        }
        /**
         * CustomerInfoResponseV3
         */
        export interface CustomerInfoResponseV3 {
            /**
             * Статус объекта
             * An enumeration.
             * example:
             * Active
             */
            status: "Active" | "Suspended";
            /**
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             * example:
             * LF0000000001
             */
            legalId: string;
            /**
             * Время регистрации
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            createdAt: string; // date-time
            /**
             * Юридический адрес
             * example:
             * УЛИЦА ТАТАРСКАЯ Б. ДОМ 11
             */
            address?: string;
            /**
             * Город
             * example:
             * Москва
             */
            city?: string;
            /**
             * код страны-регистрации юридического лица, в формате "ISO 3166, Alpha-2"
             * example:
             * RU
             */
            countryCode: string;
            /**
             * Код региона-регистрации юридического лица, первые две цифры кода ОКТМО
             * example:
             * 45
             */
            countrySubDivisionCode?: string;
            /**
             * Индекс
             * example:
             * 115184
             */
            zipCode?: string;
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode: string;
            /**
             * Организационно-правовая форма юридического лица
             * example:
             * АО
             */
            entityType?: string;
            /**
             * ИНН
             * example:
             * 7706812159
             */
            inn: string;
            /**
             * КПП
             * example:
             * 770501001
             */
            kpp?: string;
            /**
             * Полное наименование юридического лица
             * example:
             * АКЦИОНЕРНОЕ ОБЩЕСТВО "НАЦИОНАЛЬНАЯ СИСТЕМА ПЛАТЕЖНЫХ КАРТ"
             */
            name: string;
            /**
             * ОГРН
             * example:
             * 1147746831352
             */
            ogrn: string;
            /**
             * БИК банка клиента
             * example:
             * 041234678
             */
            bankCode: string;
            /**
             * Merchants
             */
            MerchantList?: /* Merchant */ Merchant[];
            /**
             * Accounts
             */
            AccountList?: /* Account */ Account[];
        }
        /**
         * CustomerListModel
         */
        export interface CustomerListModel {
            /**
             * Customer
             */
            Customer: /* CustomerModel */ CustomerModel[];
        }
        /**
         * CustomerListResponseModel
         * Метод получения списка доступных клиентов
         */
        export interface CustomerListResponseModel {
            Data: /* CustomerListModel */ CustomerListModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * CustomerModel
         */
        export interface CustomerModel {
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode: string;
            /**
             * Тип клиент (физическое или юридическое лицо)
             * An enumeration.
             * example:
             * Personal
             */
            customerType: "Business" | "Personal";
            /**
             * Признак резидента
             * example:
             * true
             */
            isResident: boolean;
            /**
             * ИНН
             * example:
             * 660000000000
             */
            taxCode?: string;
            /**
             * Краткое наименование
             * example:
             * ИП Тест
             */
            shortName: string;
            /**
             * Полное наименование
             * example:
             * Индивидуальный Предприниматель Тест
             */
            fullName: string;
            /**
             * КПП
             * example:
             * 668501001
             */
            kpp?: string;
            /**
             * ОГРН или ОГРНИП
             * example:
             * 319665800211661
             */
            customerOgrn?: string;
        }
        /**
         * CustomerResponseModel
         * Метод получения информации по клиенту
         */
        export interface CustomerResponseModel {
            Data: /* CustomerModel */ CustomerModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * DeactivateCashboxQrCodeResponseDataModel
         */
        export interface DeactivateCashboxQrCodeResponseDataModel {
            Data: /* BooleanResponse */ BooleanResponse;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * DocumentCreateResponse
         */
        export interface DocumentCreateResponse {
            /**
             * Уникальный идентификатор документа
             * example:
             * 1cf95c4f-e794-4407-bac4-0829f19bd2be
             */
            documentId: string;
        }
        /**
         * DocumentCreateResponseModel
         */
        export interface DocumentCreateResponseModel {
            Data: /* DocumentCreateResponse */ DocumentCreateResponse;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * ErrorModel
         */
        export interface ErrorModel {
            /**
             * Низкоуровневое текстовое описание ошибки
             * example:
             * HTTPInternalError
             */
            errorCode: string;
            /**
             * Описание ошибки. Обрезается если длина ошибки превышает максимальное значение
             * example:
             * Something going wrong
             */
            message: string;
            /**
             * URL для помощи в устранении проблемы
             * example:
             * "http://enter.tochka.com/open-banking/docs"
             */
            url: string;
        }
        /**
         * ErrorResponse
         */
        export interface ErrorResponse {
            /**
             * Высокоуровневый текстовый код ошибки, необходимый для классификации.
             * example:
             * 500
             */
            code: string;
            /**
             * Уникальный идентификатор ошибки, для целей аудита
             * example:
             * c397b21a-d998-4c4d-9471-e60eaf816b87
             */
            id: string;
            /**
             * Краткое сообщение об ошибке.
             * example:
             * Что-то пошло не так
             */
            message: string;
            /**
             * Подробное описание ошибок
             */
            Errors: /* ErrorModel */ ErrorModel[];
        }
        /**
         * ExternalAccountStatusEnum
         * An enumeration.
         */
        export type ExternalAccountStatusEnum = "Enabled" | "Disabled" | "Deleted" | "ProForma" | "Pending";
        /**
         * ExternalAccountSubTypeEnum
         * An enumeration.
         */
        export type ExternalAccountSubTypeEnum = "CreditCard" | "CurrentAccount" | "Loan" | "Mortgage" | "PrePaidCard" | "Savings" | "Special";
        /**
         * ExternalAcquiringPaymentTypeEnum
         * An enumeration.
         */
        export type ExternalAcquiringPaymentTypeEnum = "sbp" | "card";
        /**
         * ExternalBalanceStaticTypeEnum
         * **Описание типов балансов**
         *
         *   - `OpeningAvailable` - Начальный остаток
         *   - `ClosingAvailable` - Доступный баланс
         *   - `Expected` - Сумма заблокированных средств
         *   - `OverdraftAvailable` - Доступный лимит по овердрафту
         */
        export type ExternalBalanceStaticTypeEnum = "OpeningAvailable" | "ClosingAvailable" | "Expected" | "OverdraftAvailable";
        /**
         * ExternalBalanceTypeEnum
         * An enumeration.
         */
        export type ExternalBalanceTypeEnum = "Credit" | "Debit";
        /**
         * ExternalConsentTypeEnum
         * An enumeration.
         */
        export type ExternalConsentTypeEnum = "ReadAccountsBasic" | "ReadAccountsDetail" | "ReadBalances" | "ReadStatements" | "ReadTransactionsBasic" | "ReadTransactionsCredits" | "ReadTransactionsDebits" | "ReadTransactionsDetail" | "ReadCustomerData" | "ReadSBPData" | "EditSBPData" | "CreatePaymentForSign" | "CreatePaymentOrder" | "ReadAcquiringData" | "MakeAcquiringOperation" | "ManageInvoiceData" | "ManageWebhookData";
        /**
         * ExternalCreditDebitIndicatorEnum
         * An enumeration.
         */
        export type ExternalCreditDebitIndicatorEnum = "Credit" | "Debit";
        /**
         * ExternalTransactionStatusEnum
         * An enumeration.
         */
        export type ExternalTransactionStatusEnum = "Booked" | "Pending";
        /**
         * ExternalTransationTypeEnum
         * An enumeration.
         */
        export type ExternalTransationTypeEnum = "\u041D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435" | "\u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0435 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0435" | "\u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0435" | "\u0414\u0435\u043D\u0435\u0436\u043D\u044B\u0439 \u0447\u0435\u043A, \u0420\u041A\u041E" | "\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0432\u0437\u043D\u043E\u0441 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438, \u041F\u041A\u041E" | "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0435-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0435" | "\u0418\u043D\u043A\u0430\u0441\u0441\u043E\u0432\u043E\u0435 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0435" | "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0447\u0435\u043A" | "\u0410\u043A\u043A\u0440\u0435\u0434\u0438\u0442\u0438\u0432" | "\u041C\u0435\u043C\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0440\u0434\u0435\u0440" | "\u041F\u043E\u0433\u0430\u0448\u0435\u043D\u0438\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u0430" | "\u0412\u044B\u0434\u0430\u0447\u0430 \u043A\u0440\u0435\u0434\u0438\u0442\u0430" | "\u0410\u0432\u0438\u0437\u043E" | "\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0435 \u043A\u0430\u0440\u0442\u044B" | "\u041F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0439 \u043E\u0440\u0434\u0435\u0440" | "\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043E\u0440\u0434\u0435\u0440" | "\u041E\u0440\u0434\u0435\u0440 \u043F\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u0435\u0439" | "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u044B\u0439 \u043E\u0440\u0434\u0435\u0440" | "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C";
        /**
         * ExternalTypeEnum
         * An enumeration.
         */
        export type ExternalTypeEnum = "Business" | "Personal";
        /**
         * ForbiddenError
         */
        export interface ForbiddenError {
            /**
             * Низкоуровневое текстовое описание ошибки
             * example:
             * HTTPForbidden
             */
            errorCode: string;
            /**
             * Описание ошибки. Обрезается если длина ошибки превышает максимальное значение
             * example:
             * Something going wrong
             */
            message: string;
            /**
             * URL для помощи в устранении проблемы
             * example:
             * "http://enter.tochka.com/open-banking/docs"
             */
            url: string;
        }
        /**
         * ForbiddenErrorResponse
         */
        export interface ForbiddenErrorResponse {
            /**
             * Высокоуровневый текстовый код ошибки, необходимый для классификации.
             * example:
             * 403
             */
            code: string;
            /**
             * Уникальный идентификатор ошибки, для целей аудита
             * example:
             * c397b21a-d998-4c4d-9471-e60eaf816b87
             */
            id: string;
            /**
             * Краткое сообщение об ошибке.
             * example:
             * Что-то пошло не так
             */
            message: string;
            /**
             * Errors
             */
            Errors: /* ForbiddenError */ ForbiddenError[];
        }
        /**
         * GetCashboxQRCodeListResponseDataModel
         */
        export interface GetCashboxQRCodeListResponseDataModel {
            Data: /* GetCashboxQRCodeListResponseModel */ GetCashboxQRCodeListResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * GetCashboxQRCodeListResponseItemModel
         */
        export interface GetCashboxQRCodeListResponseItemModel {
            /**
             * Payload зарегистрированного QR-кода в СБП
             * example:
             * https://qr.nspk.ru/AS1000670LSS7DN18SJQDNP4B05KLJL2?type=01&bank=100000000001&sum=10000&cur=RUB&crc=C08B
             */
            payload: string;
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
            /**
             * Идентификатор ТСП в СБП
             * example:
             * MF0000000001
             */
            merchantId: string;
            /**
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             * example:
             * LF0000000001
             */
            legalId: string;
            /**
             * Время регистрации
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            createdAt: string; // date-time
            /**
             * Идентификатор QR-кода в СБП
             * example:
             * AS000000000000000000000000000001
             */
            qrcId: string;
            /**
             * Сумма в копейках
             * example:
             * 0
             */
            amount?: number;
            /**
             * Валюта операции
             * example:
             * RUB
             */
            currency?: string;
            /**
             * Дополнительная информация от ТСП
             * example:
             * ?
             */
            paymentPurpose?: string;
            /**
             * Идентификатор активных значений параметров QR-кода
             * example:
             * AS331309594501970709180285778247
             */
            paramsId?: string;
            /**
             * Период использования в минутах.
             * example:
             * 20
             */
            ttl?: number;
            /**
             * Комиссия
             */
            commission?: {
                /**
                 * MCC код
                 */
                mcc?: string;
                /**
                 * Размер комиссии в процентах
                 */
                percent?: number;
                /**
                 * Описание
                 */
                description?: string;
            };
            /**
             * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
             * example:
             * https://example.com/success
             */
            redirectUrl?: string; // uri
        }
        /**
         * GetCashboxQRCodeListResponseModel
         */
        export interface GetCashboxQRCodeListResponseModel {
            /**
             * Список QR-кодов
             */
            qrCodes: /* GetCashboxQRCodeListResponseItemModel */ GetCashboxQRCodeListResponseItemModel[];
        }
        /**
         * GetCashboxQRCodeRequestDataModel
         */
        export interface GetCashboxQRCodeRequestDataModel {
            Data: /* GetCashboxQRCodeRequestModel */ GetCashboxQRCodeRequestModel;
        }
        /**
         * GetCashboxQRCodeRequestModel
         */
        export interface GetCashboxQRCodeRequestModel {
            imageParams?: /* QrCodeImageParams */ QrCodeImageParams;
        }
        /**
         * GetCashboxQrCodeOperationInfoResponseDataModel
         */
        export interface GetCashboxQrCodeOperationInfoResponseDataModel {
            Data: /* GetCashboxQrCodeOperationInfoResponseModel */ GetCashboxQrCodeOperationInfoResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * GetCashboxQrCodeOperationInfoResponseModel
         */
        export interface GetCashboxQrCodeOperationInfoResponseModel {
            /**
             * Статус кассовой ссылки
             * An enumeration.
             * example:
             * WAITING_PAYMENT
             */
            qrCodeStatus: "DEACTIVATED" | "WAITING_PAYMENT" | "IN_PROGRESS";
            /**
             * Статус операции по кассовой ссылке
             * * ACWP - Операция завершена успешно
             * * RJCT - Операция отклонена
             * * RCVD - Операция в обработке
             * * NTST - Операции по QR-коду не существует
             * example:
             * ACWP
             */
            trxStatus: "ACWP" | "RJCT" | "RCVD" | "NTST";
            /**
             * Идентификатор операции
             * example:
             * A1A2S3D5F6G7H8J9K0C4S5C6D7V5D1K2
             */
            trxId?: string;
            /**
             * Сумма Операции в копейках
             * Целое, положительное число. Валюта операции – рубли РФ
             * example:
             * 100000
             */
            amount?: number;
            /**
             * Дата и время выполнения операции
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            dateTime?: string; // date-time
            /**
             * Маскированный номер телефона клиента-плательщика
             * example:
             * *********6731
             */
            payerId?: string;
            /**
             * Контрольное значение операции СБП
             * example:
             * FDOS4JUETLYT639ADAFZ4GAUY9VSM2TG2Y595LQ20EKQF3JM1CIV4ZTZYA1EYIMFMEJSRB2UR7KATMA29Q
             */
            kzo?: string;
        }
        /**
         * GetCashboxQrCodeResponseDataModel
         */
        export interface GetCashboxQrCodeResponseDataModel {
            Data: /* CashboxQrCodeResponseModel */ CashboxQrCodeResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * GetCashboxQrCodeStatusResponseDataModel
         */
        export interface GetCashboxQrCodeStatusResponseDataModel {
            Data: /* GetCashboxQrCodeStatusResponseModel */ GetCashboxQrCodeStatusResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * GetCashboxQrCodeStatusResponseModel
         */
        export interface GetCashboxQrCodeStatusResponseModel {
            /**
             * Статус операции
             * An enumeration.
             */
            status: "INACTIVATED" | "WAITING_PAYMENT" | "IN_PROGRESS";
            /**
             * Идентификатор активных значений параметров QR-кода
             */
            paramsId: string;
        }
        /**
         * GetCustomerInfoResponseModelV3
         */
        export interface GetCustomerInfoResponseModelV3 {
            Data: /* CustomerInfoResponseV3 */ CustomerInfoResponseV3;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * InvoiceCreateRequestDataModel
         */
        export interface InvoiceCreateRequestDataModel {
            Data: /* InvoiceCreateRequestModel */ InvoiceCreateRequestModel;
        }
        /**
         * InvoiceCreateRequestModel
         */
        export interface InvoiceCreateRequestModel {
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode: string;
            /**
             * Сторона заказчика/покупателя в сделке в документе
             */
            SecondSide: {
                /**
                 * Account Id
                 * example:
                 * 40817810802000000008/044525104
                 */
                accountId?: string;
                /**
                 * Юридический адрес
                 * example:
                 * 624205, РОССИЯ, СВЕРДЛОВСКАЯ обл, ЛЕСНОЙ г, ЛЕНИНА ул, ДОМ 96, офис КВ. 19
                 */
                legalAddress?: string;
                /**
                 * КПП
                 * example:
                 * 668101001
                 */
                kpp?: string;
                /**
                 * Название банка
                 * example:
                 * ООО БАНК ТОЧКА
                 */
                bankName?: string;
                /**
                 * Корреспондентский счет банка
                 * example:
                 * 30101810745374525104
                 */
                bankCorrAccount?: string;
                /**
                 * ИНН покупателя или заказчика
                 * example:
                 * 660000000000
                 */
                taxCode: string;
                /**
                 * Тип покупателя или заказчика
                 * An enumeration.
                 * example:
                 * company
                 */
                type: "ip" | "company";
                /**
                 * Наименование покупателя или заказчика
                 * example:
                 * ООО Студия дизайна М-АРТ
                 */
                secondSideName?: string;
            };
            /**
             * Содержимое счета на оплату
             */
            Content: {
                /**
                 * Содержимое счета на оплату
                 */
                Invoice: {
                    /**
                     * Список позиций
                     */
                    Positions: [
                        /* PositionModel */ PositionModel,
                        .../* PositionModel */ PositionModel[]
                    ];
                    /**
                     * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
                     * example:
                     * 2010-10-29
                     */
                    date?: string; // date
                    /**
                     * Сумма всех позиций с НДС
                     * example:
                     * 1234.56
                     */
                    totalAmount: number;
                    /**
                     * Сумма НДС
                     * example:
                     * 1234.56
                     */
                    totalNds?: number;
                    /**
                     * Номер выставляемого счёта
                     * example:
                     * 1
                     */
                    number: string;
                    /**
                     * Документ, на основании которого выставляется счёт
                     * example:
                     * Основание платежа
                     */
                    basedOn?: string;
                    /**
                     * Комментарий
                     * example:
                     * Комментарий к платежу
                     */
                    comment?: string;
                    /**
                     * Срок оплаты в виде даты, приведенной к часовому поясу Москвы
                     * example:
                     * 2020-01-20
                     */
                    paymentExpiryDate?: string; // date
                };
            };
        }
        /**
         * InvoiceModel
         */
        export interface InvoiceModel {
            /**
             * Список позиций
             */
            Positions: [
                /* PositionModel */ PositionModel,
                .../* PositionModel */ PositionModel[]
            ];
            /**
             * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
             * example:
             * 2010-10-29
             */
            date?: string; // date
            /**
             * Сумма всех позиций с НДС
             * example:
             * 1234.56
             */
            totalAmount: number;
            /**
             * Сумма НДС
             * example:
             * 1234.56
             */
            totalNds?: number;
            /**
             * Номер выставляемого счёта
             * example:
             * 1
             */
            number: string;
            /**
             * Документ, на основании которого выставляется счёт
             * example:
             * Основание платежа
             */
            basedOn?: string;
            /**
             * Комментарий
             * example:
             * Комментарий к платежу
             */
            comment?: string;
            /**
             * Срок оплаты в виде даты, приведенной к часовому поясу Москвы
             * example:
             * 2020-01-20
             */
            paymentExpiryDate?: string; // date
        }
        /**
         * InvoicePaymentStatusResponse
         */
        export interface InvoicePaymentStatusResponse {
            /**
             * Статус оплаты документа
             * An enumeration.
             * example:
             * payment_paid
             */
            paymentStatus: "payment_waiting" | "payment_expired" | "payment_paid";
        }
        /**
         * InvoicePaymentStatusResponseModel
         */
        export interface InvoicePaymentStatusResponseModel {
            Data: /* InvoicePaymentStatusResponse */ InvoicePaymentStatusResponse;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * InvoicefModel
         */
        export interface InvoicefModel {
            /**
             * Список позиций
             */
            Positions: [
                /* PositionModel */ PositionModel,
                .../* PositionModel */ PositionModel[]
            ];
            /**
             * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
             * example:
             * 2010-10-29
             */
            date?: string; // date
            /**
             * Сумма всех позиций с НДС
             * example:
             * 1234.56
             */
            totalAmount: number;
            /**
             * Сумма НДС
             * example:
             * 1234.56
             */
            totalNds?: number;
            /**
             * Номер счёт-фактуры
             * example:
             * 1
             */
            number: string;
            /**
             * Документ, на основании которого выставляется счёт
             * example:
             * Основание платежа
             */
            basedOn?: string;
        }
        /**
         * LegalEntity
         */
        export interface LegalEntity {
            /**
             * Статус объекта
             * An enumeration.
             * example:
             * Active
             */
            status: "Active" | "Suspended";
            /**
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             * example:
             * LF0000000001
             */
            legalId: string;
            /**
             * Время регистрации
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            createdAt: string; // date-time
            /**
             * Юридический адрес
             * example:
             * УЛИЦА ТАТАРСКАЯ Б. ДОМ 11
             */
            address?: string;
            /**
             * Город
             * example:
             * Москва
             */
            city?: string;
            /**
             * код страны-регистрации юридического лица, в формате "ISO 3166, Alpha-2"
             * example:
             * RU
             */
            countryCode: string;
            /**
             * Код региона-регистрации юридического лица, первые две цифры кода ОКТМО
             * example:
             * 45
             */
            countrySubDivisionCode?: string;
            /**
             * Индекс
             * example:
             * 115184
             */
            zipCode?: string;
            /**
             * Уникальный код клиента
             * example:
             * 300000092
             */
            customerCode: string;
            /**
             * Организационно-правовая форма юридического лица
             * example:
             * АО
             */
            entityType?: string;
            /**
             * ИНН
             * example:
             * 7706812159
             */
            inn: string;
            /**
             * КПП
             * example:
             * 770501001
             */
            kpp?: string;
            /**
             * Полное наименование юридического лица
             * example:
             * АКЦИОНЕРНОЕ ОБЩЕСТВО "НАЦИОНАЛЬНАЯ СИСТЕМА ПЛАТЕЖНЫХ КАРТ"
             */
            name: string;
            /**
             * ОГРН
             * example:
             * 1147746831352
             */
            ogrn: string;
        }
        /**
         * LegalEntityResponseModel
         */
        export interface LegalEntityResponseModel {
            Data: /* LegalEntity */ LegalEntity;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * LinkModel
         */
        export interface LinkModel {
            /**
             * Self
             * example:
             * https://enter.tochka.com/uapi
             */
            self: string; // uri
        }
        /**
         * Measure
         * An enumeration.
         */
        export type Measure = "\u0433." | "\u043A\u0433." | "\u0442." | "\u0441\u043C." | "\u0434\u043C." | "\u043C." | "\u0441\u043C2." | "\u0434\u043C2." | "\u043C2." | "\u043C\u043B." | "\u043B." | "\u043C3" | "\u043A\u0412\u0442.\u0447." | "\u0413\u043A\u0430\u043B." | "\u0434\u043D." | "\u0447." | "\u043C\u0438\u043D." | "\u0441\u0435\u043A." | "\u041A\u0431." | "\u041C\u0431." | "\u0413\u0431." | "\u0422\u0431." | "\u0448\u0442.";
        /**
         * Merchant
         */
        export interface Merchant {
            /**
             * Статус объекта
             * An enumeration.
             * example:
             * Active
             */
            status: "Active" | "Suspended";
            /**
             * Время регистрации
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            createdAt: string; // date-time
            /**
             * Юридический адрес
             * example:
             * УЛИЦА ТАТАРСКАЯ Б. ДОМ 11
             */
            address?: string;
            /**
             * Город
             * example:
             * Москва
             */
            city?: string;
            /**
             * код страны-регистрации юридического лица, в формате "ISO 3166, Alpha-2"
             * example:
             * RU
             */
            countryCode: string;
            /**
             * Код региона-регистрации юридического лица, первые две цифры кода ОКТМО
             * example:
             * 45
             */
            countrySubDivisionCode?: string;
            /**
             * Индекс
             * example:
             * 115184
             */
            zipCode?: string;
            /**
             * Идентификатор ТСП в СБП
             * example:
             * MF0000000001
             */
            merchantId: string;
            /**
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             * example:
             * LF0000000001
             */
            legalId: string;
            /**
             * Название ТСП (имя по вывеске)
             * example:
             * Кофейня у Артема
             */
            brandName: string;
            /**
             * Возможности ТСП по взаимодействию с покупателем
             * `001` - только QR Static
             * `010` - только QR Dynamic
             * `011` - QR Static и QR Dynamic
             * `100` - Только QR Subscription
             * `101` - QR Subscription и QR Static
             * `110` - QR Subscription и QR Dynamic
             * `111` - QR Static, QR Dynamic и QR Subscription
             * example:
             * 001
             */
            capabilities: "001" | "010" | "011" | "100" | "101" | "110" | "111";
            /**
             * "Контактный номер телефона ТСП
             * example:
             * 79991234567
             */
            contactPhoneNumber?: string;
            /**
             * MCC код
             * example:
             * 4121
             */
            mcc: string;
            /**
             * Дополнительные контакты
             */
            additionalContacts?: {
                [key: string]: any;
            }[];
        }
        /**
         * MerchantId
         */
        export interface MerchantId {
            /**
             * Идентификатор ТСП в СБП
             * example:
             * MF0000000001
             */
            merchantId: string;
        }
        /**
         * MerchantIdResponseModel
         */
        export interface MerchantIdResponseModel {
            Data: /* MerchantId */ MerchantId;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * MerchantListResponse
         */
        export interface MerchantListResponse {
            /**
             * Merchant List
             */
            MerchantList: /* Merchant */ Merchant[];
        }
        /**
         * MerchantListResponseModel
         */
        export interface MerchantListResponseModel {
            Data: /* MerchantListResponse */ MerchantListResponse;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * MerchantResponseModel
         */
        export interface MerchantResponseModel {
            Data: /* Merchant */ Merchant;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * MetaModel
         */
        export interface MetaModel {
            /**
             * Totalpages
             * example:
             * 1
             */
            totalPages: number;
        }
        /**
         * NdsKindEnum
         * An enumeration.
         */
        export type NdsKindEnum = "nds_0" | "nds_10" | "nds_20" | "without_nds";
        /**
         * NotFoundError
         */
        export interface NotFoundError {
            /**
             * Низкоуровневое текстовое описание ошибки
             * example:
             * HTTPNotFound
             */
            errorCode: string;
            /**
             * Описание ошибки. Обрезается если длина ошибки превышает максимальное значение
             * example:
             * Something going wrong
             */
            message: string;
            /**
             * URL для помощи в устранении проблемы
             * example:
             * "http://enter.tochka.com/open-banking/docs"
             */
            url: string;
        }
        /**
         * NotFoundErrorResponse
         */
        export interface NotFoundErrorResponse {
            /**
             * Высокоуровневый текстовый код ошибки, необходимый для классификации.
             * example:
             * 404
             */
            code: string;
            /**
             * Уникальный идентификатор ошибки, для целей аудита
             * example:
             * c397b21a-d998-4c4d-9471-e60eaf816b87
             */
            id: string;
            /**
             * Краткое сообщение об ошибке.
             * example:
             * Что-то пошло не так
             */
            message: string;
            /**
             * Errors
             */
            Errors: /* NotFoundError */ NotFoundError[];
        }
        /**
         * OptionalLegalId
         */
        export interface OptionalLegalId {
            /**
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             * example:
             * LF0000000001
             */
            legalId?: string;
        }
        /**
         * PackingListModel
         */
        export interface PackingListModel {
            /**
             * Список позиций
             */
            Positions: [
                /* PositionModel */ PositionModel,
                .../* PositionModel */ PositionModel[]
            ];
            /**
             * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
             * example:
             * 2010-10-29
             */
            date?: string; // date
            /**
             * Сумма всех позиций с НДС
             * example:
             * 1234.56
             */
            totalAmount: number;
            /**
             * Сумма НДС
             * example:
             * 1234.56
             */
            totalNds?: number;
            /**
             * Номер товарной накладной
             * example:
             * 1
             */
            number: string;
            /**
             * Документ, на основании которого вы выставляете накладную
             * example:
             * Основание платежа
             */
            basedOn?: string;
        }
        /**
         * PaginatedLinkModel
         */
        export interface PaginatedLinkModel {
            /**
             * Self
             * example:
             * https://enter.tochka.com/uapi
             */
            self: string; // uri
            /**
             * First
             * example:
             * https://enter.tochka.com/uapi
             */
            first?: string; // uri
            /**
             * Prev
             * example:
             * https://enter.tochka.com/uapi
             */
            prev?: string; // uri
            /**
             * Next
             * example:
             * https://enter.tochka.com/uapi
             */
            next?: string; // uri
            /**
             * Last
             * example:
             * https://enter.tochka.com/uapi
             */
            last?: string; // uri
        }
        /**
         * PaymentForSignRequestDataModel
         */
        export interface PaymentForSignRequestDataModel {
            Data: /* PaymentForSignRequestModel */ PaymentForSignRequestModel;
        }
        /**
         * PaymentForSignRequestModel
         */
        export interface PaymentForSignRequestModel {
            /**
             * Номер счёта отправителя
             * example:
             * 40702810840020002503
             */
            accountCode: string;
            /**
             * БИК отправителя
             * example:
             * 044525104
             */
            bankCode: string;
            /**
             * ИНН за кого платят
             * Заполняется только при платеже за 3 лицо. Допустимые значения "0", 10 или 12 значное число
             * example:
             * 5001038736
             */
            payerINN?: string;
            /**
             * КПП за кого платят
             * Заполняется только за 3 лицо при платеже в бюджет. Допустимые значение "0" или 9 значное число
             * example:
             * 500101001
             */
            payerKPP?: string;
            /**
             * БИК получателя
             * example:
             * 044525104
             */
            counterpartyBankBic: string;
            /**
             * Счёт получателя
             * example:
             * 40702810840020002504
             */
            counterpartyAccountNumber: string;
            /**
             * ИНН получателя
             * example:
             * 5001038736
             */
            counterpartyINN?: string;
            /**
             * КПП получателя
             * Допустимые значения "0" или 9 значное число
             * example:
             * 500101001
             */
            counterpartyKPP?: string;
            /**
             * Получатель платежа
             * example:
             * ООО "БАЙКАЛ-СЕРВИС ТК"
             */
            counterpartyName: string;
            /**
             * Кор. счёт банка получателя
             * example:
             * 30101810745374525104
             */
            counterpartyBankCorrAccount?: string;
            /**
             * Сумма платежа
             * example:
             * 700.33
             */
            paymentAmount: number;
            /**
             * Дата платежа. Используется стандарт ISO8601
             * Дата платежа, приведенная к часовому поясу Москвы
             * example:
             * 2018-03-29
             */
            paymentDate: string; // date
            /**
             * Номер платежа
             * example:
             * 9195
             */
            paymentNumber: number;
            /**
             * Приоритет платежа
             * example:
             * 5
             */
            paymentPriority?: string;
            /**
             * Назначение платежа
             * example:
             * Оплата по счету № 1 от 01.01.2021. Без НДС
             */
            paymentPurpose: string;
            /**
             * Поле 20
             * Заполняется только при платеже физ лицам на счета:('40810', '40817', '40823', '40824', '40826', '423', '30232', '40803', '40813', '40820', '426'). Допустимые значения 1,2,3,4,5 и пусто
             * example:
             * 1
             */
            codePurpose?: string;
            /**
             * Код УИН (поле 22)
             * example:
             * 1
             */
            supplierBillId?: string;
            /**
             * Дата документа (поле 109). Используется стандарт ISO8601. Допустимо значение "0"
             * example:
             * 2018-03-29
             */
            taxInfoDocumentDate?: string;
            /**
             * Номера документа (поле 108)
             * example:
             * 12
             */
            taxInfoDocumentNumber?: string;
            /**
             * КБК (поле 104)
             * example:
             * 18210202020061000160
             */
            taxInfoKBK?: string;
            /**
             * ОКАТО (поле 105)
             * example:
             * 65401364000
             */
            taxInfoOKATO?: string;
            /**
             * Налоговый период (поле 107). Допустимо значение "0"
             * example:
             * МС.08.2009
             */
            taxInfoPeriod?: string;
            /**
             * Основание (поле 106)
             * example:
             * ТП
             */
            taxInfoReasonCode?: string;
            /**
             * Статус (поле 101)
             * example:
             * 08
             */
            taxInfoStatus?: string;
            /**
             * Код выплат из бюджета на ФЛ (поле 110)
             * example:
             * 1
             */
            budgetPaymentCode?: string;
            /**
             * Email для отправки платежного поручения
             * example:
             * ivanov@mail.com
             */
            email?: string; // email
        }
        /**
         * PaymentForSignResponseDataModel
         */
        export interface PaymentForSignResponseDataModel {
            Data: /* PaymentForSignResponseModel */ PaymentForSignResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * PaymentForSignResponseModel
         */
        export interface PaymentForSignResponseModel {
            /**
             * ID запроса
             * example:
             * openapi-b96d770e-769f-49ce-9630-890e00d47720
             */
            requestId: string;
        }
        /**
         * PaymentMethod
         * An enumeration.
         */
        export type PaymentMethod = "full_payment" | "full_prepayment";
        /**
         * PaymentObject
         * An enumeration.
         */
        export type PaymentObject = "goods" | "service" | "work";
        /**
         * PaymentOrderRequestDataModel
         */
        export interface PaymentOrderRequestDataModel {
            Data: /* PaymentOrderRequestModel */ PaymentOrderRequestModel;
        }
        /**
         * PaymentOrderRequestModel
         */
        export interface PaymentOrderRequestModel {
            /**
             * Номер счёта отправителя
             * example:
             * 40702810840020002503
             */
            accountCode?: string;
            /**
             * БИК отправителя
             * example:
             * 044525104
             */
            bankCode?: string;
            /**
             * ИНН за кого платят
             * Заполняется только при платеже за 3 лицо. Допустимые значения "0", 10 или 12 значное число
             * example:
             * 5001038736
             */
            payerINN?: string;
            /**
             * КПП за кого платят
             * Заполняется при платеже в бюджет (за себя или 3 лицо). Допустимые значение "0" или 9 значное число
             * example:
             * 500101001
             */
            payerKPP?: string;
            /**
             * БИК получателя
             * example:
             * 044525104
             */
            counterpartyBankBic: string;
            /**
             * Счёт получателя
             * example:
             * 40702810840020002504
             */
            counterpartyAccountNumber: string;
            /**
             * ИНН получателя
             * example:
             * 5001038736
             */
            counterpartyINN?: string;
            /**
             * КПП получателя
             * Допустимые значения "0" или 9 значное число
             * example:
             * 500101001
             */
            counterpartyKPP?: string;
            /**
             * Получатель платежа
             * example:
             * ООО "БАЙКАЛ-СЕРВИС ТК"
             */
            counterpartyName: string;
            /**
             * Кор. счёт банка получателя
             * example:
             * 30101810745374525104
             */
            counterpartyBankCorrAccount?: string;
            /**
             * Сумма платежа
             * example:
             * 700.33
             */
            paymentAmount: number;
            /**
             * Дата платежа. Используется стандарт ISO8601
             * Дата платежа, приведенная к часовому поясу Москвы
             * example:
             * 2018-03-29
             */
            paymentDate: string; // date
            /**
             * Номер платежа
             * example:
             * 9195
             */
            paymentNumber: number;
            /**
             * Приоритет платежа
             * example:
             * 5
             */
            paymentPriority?: string;
            /**
             * Назначение платежа
             * example:
             * Оплата по счету № 1 от 01.01.2021. Без НДС
             */
            paymentPurpose: string;
            /**
             * Поле 20
             * Заполняется только при платеже физ лицам на счета:('40810', '40817', '40823', '40824', '40826', '423', '30232', '40803', '40813', '40820', '426'). Допустимые значения 1,2,3,4,5 и пусто
             * example:
             * 1
             */
            codePurpose?: string;
            /**
             * Код УИН (поле 22)
             * example:
             * 1
             */
            supplierBillId?: string;
            /**
             * Дата документа (поле 109). Используется стандарт ISO8601. Допустимо значение "0"
             * example:
             * 2018-03-29
             */
            taxInfoDocumentDate?: string;
            /**
             * Номера документа (поле 108)
             * example:
             * 12
             */
            taxInfoDocumentNumber?: string;
            /**
             * КБК (поле 104)
             * example:
             * 18210202020061000160
             */
            taxInfoKBK?: string;
            /**
             * ОКАТО (поле 105)
             * example:
             * 65401364000
             */
            taxInfoOKATO?: string;
            /**
             * Налоговый период (поле 107). Допустимо значение "0"
             * example:
             * МС.08.2009
             */
            taxInfoPeriod?: string;
            /**
             * Основание (поле 106)
             * example:
             * ТП
             */
            taxInfoReasonCode?: string;
            /**
             * Статус (поле 101)
             * example:
             * 08
             */
            taxInfoStatus?: string;
            /**
             * Код выплат из бюджета на ФЛ (поле 110)
             * example:
             * 1
             */
            budgetPaymentCode?: string;
        }
        /**
         * PaymentOrderResponseDataModel
         */
        export interface PaymentOrderResponseDataModel {
            Data: /* PaymentOrderResponseModel */ PaymentOrderResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * PaymentOrderResponseModel
         */
        export interface PaymentOrderResponseModel {
            /**
             * ID запроса
             * example:
             * openapi-b96d770e-769f-49ce-9630-890e00d47720
             */
            requestId: string;
            /**
             * Ссылка на страницу для редиректа. В query-параметрах указываются поля платежа.
             * example:
             * https://enter.tochka.com/payment/?requestId=openapi-b96d770e-769f-49ce-9630-890e00d47720&clientId=test
             */
            redirectURL: string;
        }
        /**
         * PaymentOrderStatusEnum
         * **Описание статусов платежа**
         *
         *   - `Initiated` - Все необходимые реквизиты для платежа получены, платёж готов к проверке на возможность проведения
         *   - `Wait For Owner Requisites` - Часть реквизитов для платежа получена, кроме реквизитов плательщика
         *   - `NotAllowed` - Платёж нельзя провести: либо у пользователя нет прав для подписи, либо платёж заблокирован
         *   комплаенсом
         *   - `Allowed` - Платёж готов к подписанию, все проверки пройдены
         *   - `WaitingForSign` - Платёж ждёт подписи
         *   - `WaitingForCreate` - Платёж подписан, ждёт создания внутри систем банка
         *   - `Created` - Платёж создан
         *   - `Paid` - Платёж оплачен
         *   - `Canceled` - Платёж отменен
         *   - `Rejected` - Платёж отменён
         */
        export type PaymentOrderStatusEnum = "Initiated" | "Wait For Owner Requisites" | "NotAllowed" | "Allowed" | "WaitingForSign" | "WaitingForCreate" | "Created" | "Paid" | "Canceled" | "Rejected";
        /**
         * PaymentStatusResponseDataModel
         */
        export interface PaymentStatusResponseDataModel {
            Data: /* PaymentStatusResponseModel */ PaymentStatusResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * PaymentStatusResponseModel
         */
        export interface PaymentStatusResponseModel {
            /**
             * ID запроса
             * example:
             * openapi-b96d770e-769f-49ce-9630-890e00d47720
             */
            requestId: string;
            /**
             * Статус
             * **Описание статусов платежа**
             *
             *   - `Initiated` - Все необходимые реквизиты для платежа получены, платёж готов к проверке на возможность проведения
             *   - `Wait For Owner Requisites` - Часть реквизитов для платежа получена, кроме реквизитов плательщика
             *   - `NotAllowed` - Платёж нельзя провести: либо у пользователя нет прав для подписи, либо платёж заблокирован
             *   комплаенсом
             *   - `Allowed` - Платёж готов к подписанию, все проверки пройдены
             *   - `WaitingForSign` - Платёж ждёт подписи
             *   - `WaitingForCreate` - Платёж подписан, ждёт создания внутри систем банка
             *   - `Created` - Платёж создан
             *   - `Paid` - Платёж оплачен
             *   - `Canceled` - Платёж отменен
             *   - `Rejected` - Платёж отменён
             * example:
             * WaitingForCreate
             */
            status: "Initiated" | "Wait For Owner Requisites" | "NotAllowed" | "Allowed" | "WaitingForSign" | "WaitingForCreate" | "Created" | "Paid" | "Canceled" | "Rejected";
            /**
             * Ошибки
             * example:
             * []
             */
            errors?: any[];
        }
        /**
         * PositionModel
         */
        export interface PositionModel {
            /**
             * Название товара или услуги
             * example:
             * Название товара
             */
            positionName: string;
            /**
             * Код единицы измерения
             * An enumeration.
             * example:
             * шт.
             */
            unitCode: "\u0448\u0442." | "\u0442\u044B\u0441.\u0448\u0442." | "\u043A\u043E\u043C\u043F\u043B." | "\u043F\u0430\u0440." | "\u0443\u0441\u043B.\u0435\u0434." | "\u0443\u043F\u0430\u043A." | "\u0443\u0441\u043B\u0443\u0433\u0430." | "\u043F\u0430\u0447." | "\u043C\u0438\u043D." | "\u0447." | "\u0441\u0443\u0442." | "\u0433." | "\u043A\u0433." | "\u043B." | "\u043C." | "\u043C2." | "\u043C3." | "\u043A\u043C." | "\u0433\u0430." | "\u043A\u0412\u0442." | "\u043A\u0412\u0442.\u0447.";
            /**
             * Ставка НДС
             * An enumeration.
             * example:
             * nds_0
             */
            ndsKind: "nds_0" | "nds_10" | "nds_20" | "without_nds";
            /**
             * Цена единицы с НДС
             * example:
             * 1234.56
             */
            price: number;
            /**
             * Количество
             * example:
             * 1234.567
             */
            quantity: number;
            /**
             * Сумма позиции с НДС
             * example:
             * 1234.56
             */
            totalAmount: number;
            /**
             * Сумма НДС
             * example:
             * 1234.56
             */
            totalNds?: number;
        }
        /**
         * QRCodeListResponse
         */
        export interface QRCodeListResponse {
            /**
             * Qr Code List
             */
            qrCodeList: /* QrCode */ QrCode[];
        }
        /**
         * QRCodeListResponseModel
         */
        export interface QRCodeListResponseModel {
            Data: /* QRCodeListResponse */ QRCodeListResponse;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * QRCodeModelResponseModel
         */
        export interface QRCodeModelResponseModel {
            Data: /* RegisteredQrCode */ RegisteredQrCode;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * QRCodePaymentStatusExternal
         * **Описание возможных статусов платежа**
         *
         *   - `NotStarted` - операции по QR-коду не существует
         *   - `Received` - операция в обработке
         *   - `InProgress` - операция в обработке
         *   - `Accepted` - операция завершена успешно
         *   - `Rejected` - операция отклонена
         */
        export type QRCodePaymentStatusExternal = "NotStarted" | "Received" | "InProgress" | "Accepted" | "Rejected";
        /**
         * QRCodePaymentStatusListResponse
         */
        export interface QRCodePaymentStatusListResponse {
            /**
             * Payment List
             */
            paymentList: /* QrCodePaymentStatus */ QrCodePaymentStatus[];
        }
        /**
         * QRCodePaymentStatusListResponseModel
         */
        export interface QRCodePaymentStatusListResponseModel {
            Data: /* QRCodePaymentStatusListResponse */ QRCodePaymentStatusListResponse;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * QRCodeRequestParams
         */
        export interface QRCodeRequestParams {
            /**
             * Ширина изображения (>=200, по умолчанию: 300)
             */
            width: number;
            /**
             * Высота изображения (>=200, по умолчанию: 300)
             */
            height: number;
            /**
             * Тип контента ("image/png" или "image/svg+xml" )
             * An enumeration.
             */
            mediaType?: "image/png" | "image/svg+xml";
        }
        /**
         * QRCodeResponseModel
         */
        export interface QRCodeResponseModel {
            Data: /* QrCode */ QrCode;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * QrCode
         */
        export interface QrCode {
            /**
             * Payload зарегистрированного QR-кода в СБП
             * example:
             * https://qr.nspk.ru/AS1000670LSS7DN18SJQDNP4B05KLJL2?type=01&bank=100000000001&sum=10000&cur=RUB&crc=C08B
             */
            payload: string;
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
            /**
             * Статус объекта
             * An enumeration.
             * example:
             * Active
             */
            status: "Active" | "Suspended";
            /**
             * Время регистрации
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            createdAt: string; // date-time
            /**
             * Идентификатор ТСП в СБП
             * example:
             * MF0000000001
             */
            merchantId: string;
            /**
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             * example:
             * LF0000000001
             */
            legalId: string;
            /**
             * Идентификатор QR-кода в СБП
             * example:
             * AS000000000000000000000000000001
             */
            qrcId: string;
            /**
             * Сумма в копейках
             * example:
             * 0
             */
            amount?: number;
            /**
             * Размер комиссии в процентах
             * example:
             * 0
             */
            commissionPercent: number;
            /**
             * Валюта операции
             * example:
             * RUB
             */
            currency?: string;
            /**
             * Дополнительная информация от ТСП
             * example:
             * ?
             */
            paymentPurpose?: string;
            /**
             * Тип QR-кода
             * 01 - QR-Static (QR наклейка)
             * 02 - QR-Dynamic (QR на кассе)
             * example:
             * 01
             */
            qrcType: "01" | "02";
            /**
             * Версия payload QR-кода
             * example:
             * 01
             */
            templateVersion: string;
            /**
             * название источника (системы создавшей QR-код)
             * example:
             * tochka.com
             */
            sourceName?: string;
            /**
             * Период использования в минутах.
             * example:
             * 60
             */
            ttl?: string;
            image?: /* QrCodeContent */ QrCodeContent;
        }
        /**
         * QrCodeContent
         */
        export interface QrCodeContent {
            /**
             * Ширина изображения (>=200, по умолчанию: 300)
             */
            width: number;
            /**
             * Высота изображения (>=200, по умолчанию: 300)
             */
            height: number;
            /**
             * Тип контента
             * An enumeration.
             */
            mediaType?: "image/png" | "image/svg+xml";
            /**
             * содержимое изображения (для image/png - в кодировке base64)
             * example:
             * iVBORw0KGgoAAAANSUhEUgAAASwAAAEs...
             */
            content: string;
        }
        /**
         * QrCodeImageParams
         */
        export interface QrCodeImageParams {
            /**
             * Ширина изображения (>=200, по умолчанию: 300)
             */
            width: number;
            /**
             * Высота изображения (>=200, по умолчанию: 300)
             */
            height: number;
            /**
             * Тип контента
             * An enumeration.
             */
            mediaType?: "image/png" | "image/svg+xml";
        }
        /**
         * QrCodePaymentStatus
         */
        export interface QrCodePaymentStatus {
            /**
             * Идентификатор QR-кода в СБП
             * example:
             * AS000000000000000000000000000001
             */
            qrcId: string;
            /**
             * Код операции
             * example:
             * RQ00000
             */
            code: string;
            /**
             * Статус операции, инициированной Dynamic QR-кодом
             * **Описание возможных статусов платежа**
             *
             *   - `NotStarted` - операции по QR-коду не существует
             *   - `Received` - операция в обработке
             *   - `InProgress` - операция в обработке
             *   - `Accepted` - операция завершена успешно
             *   - `Rejected` - операция отклонена
             * example:
             * InProgress
             */
            status?: "NotStarted" | "Received" | "InProgress" | "Accepted" | "Rejected";
            /**
             * Текстовое представление статуса
             * example:
             * Запрос обработан успешно
             */
            message: string;
            /**
             * Идентификатор операции, инициированной Dynamic QR-кодом
             * example:
             * X1A2S3D5F6G7H8J9K0C4S5C6D7V5D1K2
             */
            trxId?: string;
        }
        /**
         * ReceiptClientModel
         */
        export interface ReceiptClientModel {
            /**
             * Для юрлица — название организации, для ИП и физического лица — ФИО
             * example:
             * Иванов Иван Иванович
             */
            name?: string;
            /**
             * Email покупателя, на который будет отправлен чек
             * example:
             * ivanov@mail.com
             */
            email: string; // email
            /**
             * Телефон пользователя для отправки чека.
             * example:
             * +7999999999
             */
            phone?: string;
        }
        /**
         * ReceiptItemModel
         */
        export interface ReceiptItemModel {
            /**
             * Ставка НДС
             * An enumeration.
             */
            vatType?: "none" | "vat0" | "vat10" | "vat20" | "vat110" | "vat120";
            /**
             * Название товара
             */
            name: string;
            /**
             * Цена за единицу товара
             * example:
             * 1234.00
             */
            amount: number;
            /**
             * Количество товара
             * example:
             * 1
             */
            quantity: number;
            /**
             * Тип оплаты
             * An enumeration.
             * example:
             * full_payment
             */
            paymentMethod?: "full_payment" | "full_prepayment";
            /**
             * Признак предмета расчёта
             * An enumeration.
             * example:
             * service
             */
            paymentObject?: "goods" | "service" | "work";
            /**
             * Единица измерения. По умолчанию - штуки
             * An enumeration.
             * example:
             * шт.
             */
            measure?: "\u0433." | "\u043A\u0433." | "\u0442." | "\u0441\u043C." | "\u0434\u043C." | "\u043C." | "\u0441\u043C2." | "\u0434\u043C2." | "\u043C2." | "\u043C\u043B." | "\u043B." | "\u043C3" | "\u043A\u0412\u0442.\u0447." | "\u0413\u043A\u0430\u043B." | "\u0434\u043D." | "\u0447." | "\u043C\u0438\u043D." | "\u0441\u0435\u043A." | "\u041A\u0431." | "\u041C\u0431." | "\u0413\u0431." | "\u0422\u0431." | "\u0448\u0442.";
        }
        /**
         * ReceiptItemResponseModel
         */
        export interface ReceiptItemResponseModel {
            /**
             * Ставка НДС
             * An enumeration.
             */
            vatType?: "none" | "vat0" | "vat10" | "vat20" | "vat110" | "vat120";
            /**
             * Название товара
             */
            name: string;
            /**
             * Цена за единицу товара
             * example:
             * 1234.00
             */
            amount: number;
            /**
             * Количество товара
             * example:
             * 1
             */
            quantity: number;
            /**
             * Тип оплаты
             * An enumeration.
             * example:
             * full_payment
             */
            paymentMethod?: "full_payment" | "full_prepayment";
            /**
             * Признак предмета расчёта
             * An enumeration.
             * example:
             * service
             */
            paymentObject?: "goods" | "service" | "work";
            /**
             * Единица измерения. По умолчанию - штуки
             * An enumeration.
             * example:
             * шт.
             */
            measure?: "\u0433." | "\u043A\u0433." | "\u0442." | "\u0441\u043C." | "\u0434\u043C." | "\u043C." | "\u0441\u043C2." | "\u0434\u043C2." | "\u043C2." | "\u043C\u043B." | "\u043B." | "\u043C3" | "\u043A\u0412\u0442.\u0447." | "\u0413\u043A\u0430\u043B." | "\u0434\u043D." | "\u0447." | "\u043C\u0438\u043D." | "\u0441\u0435\u043A." | "\u041A\u0431." | "\u041C\u0431." | "\u0413\u0431." | "\u0422\u0431." | "\u0448\u0442.";
        }
        /**
         * RegisterCashboxQrCodeRequestDataModel
         */
        export interface RegisterCashboxQrCodeRequestDataModel {
            Data: /* RegisterCashboxQrCodeRequestModel */ RegisterCashboxQrCodeRequestModel;
        }
        /**
         * RegisterCashboxQrCodeRequestModel
         */
        export interface RegisterCashboxQrCodeRequestModel {
            /**
             * Идентификатор ТСП в СБП
             * example:
             * MF0000000001
             */
            merchantId: string;
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
            /**
             * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
             */
            redirectUrl?: string; // uri
            /**
             * Параметры изображения
             */
            imageParams?: {
                /**
                 * Ширина изображения (>=200, по умолчанию: 300)
                 */
                width: number;
                /**
                 * Высота изображения (>=200, по умолчанию: 300)
                 */
                height: number;
                /**
                 * Тип контента
                 * An enumeration.
                 */
                mediaType?: "image/png" | "image/svg+xml";
            };
        }
        /**
         * RegisterCashboxQrCodeResponseDataModel
         */
        export interface RegisterCashboxQrCodeResponseDataModel {
            Data: /* RegisterCashboxQrCodeResponseModel */ RegisterCashboxQrCodeResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * RegisterCashboxQrCodeResponseModel
         */
        export interface RegisterCashboxQrCodeResponseModel {
            /**
             * Payload зарегистрированного QR-кода в СБП
             * example:
             * https://qr.nspk.ru/AS1000670LSS7DN18SJQDNP4B05KLJL2?type=01&bank=100000000001&sum=10000&cur=RUB&crc=C08B
             */
            payload: string;
            /**
             * Идентификатор QR-кода в СБП
             * example:
             * AS000000000000000000000000000001
             */
            qrcId: string;
            image?: /* QrCodeContent */ QrCodeContent;
        }
        /**
         * RegisterLegalEntityResponseModel
         */
        export interface RegisterLegalEntityResponseModel {
            Data: /* OptionalLegalId */ OptionalLegalId;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * RegisterMerchant
         */
        export interface RegisterMerchant {
            /**
             * Юридический адрес
             * example:
             * УЛИЦА ТАТАРСКАЯ Б. ДОМ 11
             */
            address: string;
            /**
             * Город
             * example:
             * Москва
             */
            city: string;
            /**
             * код страны-регистрации юридического лица, в формате "ISO 3166, Alpha-2"
             * example:
             * RU
             */
            countryCode: string;
            /**
             * Код региона-регистрации юридического лица, первые две цифры кода ОКТМО
             * example:
             * 45
             */
            countrySubDivisionCode: string;
            /**
             * Индекс
             * example:
             * 115184
             */
            zipCode: string;
            /**
             * Название ТСП (имя по вывеске)
             * example:
             * Кофейня у Артема
             */
            brandName: string;
            /**
             * Возможности ТСП по взаимодействию с покупателем
             * `001` - только QR Static
             * `010` - только QR Dynamic
             * `011` - QR Static и QR Dynamic
             * `100` - Только QR Subscription
             * `101` - QR Subscription и QR Static
             * `110` - QR Subscription и QR Dynamic
             * `111` - QR Static, QR Dynamic и QR Subscription
             * example:
             * 001
             */
            capabilities: "001" | "010" | "011" | "100" | "101" | "110" | "111";
            /**
             * "Контактный номер телефона ТСП
             * example:
             * 79991234567
             */
            contactPhoneNumber?: string;
            /**
             * MCC код
             * example:
             * 4121
             */
            mcc: string;
        }
        /**
         * RegisterMerchantRequest
         */
        export interface RegisterMerchantRequest {
            Data: /* RegisterMerchant */ RegisterMerchant;
        }
        /**
         * RegisterQRCode
         */
        export interface RegisterQRCode {
            /**
             * Сумма в копейках
             * Поле обязательно для заполнения, если тип QR = QR-Dynamic
             */
            amount?: number;
            /**
             * Валюта операции
             * example:
             * RUB
             */
            currency?: string;
            /**
             * Дополнительная информация от ТСП
             * example:
             * ?
             */
            paymentPurpose: string;
            /**
             * Тип QR-кода
             * 01 - QR-Static (QR наклейка)
             * 02 - QR-Dynamic (QR на кассе)
             * example:
             * 01
             */
            qrcType: "01" | "02";
            /**
             * Параметры изображения
             */
            imageParams?: {
                /**
                 * Ширина изображения (>=200, по умолчанию: 300)
                 */
                width: number;
                /**
                 * Высота изображения (>=200, по умолчанию: 300)
                 */
                height: number;
                /**
                 * Тип контента ("image/png" или "image/svg+xml" )
                 * An enumeration.
                 */
                mediaType?: "image/png" | "image/svg+xml";
            };
            /**
             * Название источника
             * Cистема, создавшая QR-код
             */
            sourceName?: string;
            /**
             * Период использования QR-кода в минутах
             * Задается, только если тип QR = QR-Dynamic
             */
            ttl?: number;
            /**
             * URL адрес
             * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
             */
            redirectUrl?: string; // uri
        }
        /**
         * RegisterQRCodeRequest
         */
        export interface RegisterQRCodeRequest {
            Data: /* RegisterQRCode */ RegisterQRCode;
        }
        /**
         * RegisteredQrCode
         */
        export interface RegisteredQrCode {
            /**
             * Payload зарегистрированного QR-кода в СБП
             * example:
             * https://qr.nspk.ru/AS1000670LSS7DN18SJQDNP4B05KLJL2?type=01&bank=100000000001&sum=10000&cur=RUB&crc=C08B
             */
            payload: string;
            /**
             * Идентификатор QR-кода в СБП
             * example:
             * AS000000000000000000000000000001
             */
            qrcId: string;
            image?: /* QrCodeContent */ QrCodeContent;
        }
        /**
         * SBPCashboxOperationQrCodeStatus
         * An enumeration.
         */
        export type SBPCashboxOperationQrCodeStatus = "DEACTIVATED" | "WAITING_PAYMENT" | "IN_PROGRESS";
        /**
         * SBPCashboxQrCodeStatus
         * An enumeration.
         */
        export type SBPCashboxQrCodeStatus = "INACTIVATED" | "WAITING_PAYMENT" | "IN_PROGRESS";
        /**
         * SBPCashboxTrxStatus
         * * ACWP - Операция завершена успешно
         * * RJCT - Операция отклонена
         * * RCVD - Операция в обработке
         * * NTST - Операции по QR-коду не существует
         */
        export type SBPCashboxTrxStatus = "ACWP" | "RJCT" | "RCVD" | "NTST";
        /**
         * SBPPayment
         */
        export interface SBPPayment {
            /**
             * Идентификатор QR-кода в СБП
             * example:
             * AS000000000000000000000000000001
             */
            qrcId: string;
            /**
             * Статус операции, инициированной Dynamic QR-кодом
             * **Описание возможных статусов платежа**
             *   - `Confirming` - операция в процессе подтверждения ОПКЦ СБП
             *   - `Confirmed` - операция подтверждена
             *   - `Initiated` - операция отправлена на обработку
             *   - `Accepting` - операция в обработке ОПКЦ СБП
             *   - `Accepted` - операция успешно завершена
             *   - `InProgress` - операция в обработке РЦ СБП
             *   - `Rejected` - операция отклонена
             *   - `Error` - ошибка выполнения операции
             *   - `Timeout` - тайм-аут выполнения операции
             * example:
             * InProgress
             */
            status: "Confirming" | "Confirmed" | "Initiated" | "Accepting" | "Accepted" | "InProgress" | "Rejected" | "Error" | "Timeout";
            /**
             * Текстовое представление статуса
             * example:
             * Запрос обработан успешно
             */
            message: string;
            /**
             * Идентификатор операции, инициированной Dynamic QR-кодом
             * example:
             * 56746525-2768-5023-97aa-21a09c49d4d0
             */
            refTransactionId: string;
        }
        /**
         * SBPPaymentList
         */
        export interface SBPPaymentList {
            /**
             * Payments
             */
            Payments: /* SBPPayment */ SBPPayment[];
        }
        /**
         * SBPPaymentStatus
         * An enumeration.
         */
        export type SBPPaymentStatus = "WaitingForClientConfirm" | "Initiated" | "WaitingForConfirm" | "Confirmed" | "WaitingForAccept" | "Accepted" | "Rejected";
        /**
         * SBPPaymentsResponse
         */
        export interface SBPPaymentsResponse {
            Data: /* SBPPaymentList */ SBPPaymentList;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * SBPRefund
         */
        export interface SBPRefund {
            /**
             * Bank Code
             * БИК отправителя
             * example:
             * 044525104
             */
            bankCode: string;
            /**
             * Account Code
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008
             */
            accountCode: string;
            /**
             * Amount
             * Cумма операции в рублях
             * example:
             * 10
             */
            amount: string;
            /**
             * Currency
             * Валюта операции
             */
            currency?: string;
            /**
             * Qrc Id
             * ID qr-кода, по которому был сделан платеж
             * example:
             * AS10007GLJ1216F4905A1MTT3CP7GK3N
             */
            qrcId: string;
            /**
             * Purpose
             * Назначение платежа
             * example:
             * Оплата по счету № 1 от 01.01.2021. Без НДС
             */
            purpose?: string;
            /**
             * Ref Transaction Id
             * Идентификатор транзакции, по которой осуществляется возврат
             * example:
             * 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
             */
            refTransactionId: string;
        }
        /**
         * SBPRefundRequest
         */
        export interface SBPRefundRequest {
            Data: /* SBPRefund */ SBPRefund;
        }
        /**
         * SBPRefundRequestResponse
         */
        export interface SBPRefundRequestResponse {
            /**
             * ID запроса
             * example:
             * openapi-b96d770e-769f-49ce-9630-890e00d47720
             */
            requestId: string;
            /**
             * Статус по процессу возрата
             * An enumeration.
             * example:
             * Confirmed
             */
            status: "WaitingForClientConfirm" | "Initiated" | "WaitingForConfirm" | "Confirmed" | "WaitingForAccept" | "Accepted" | "Rejected";
        }
        /**
         * SBPRefundRequestResponseModel
         */
        export interface SBPRefundRequestResponseModel {
            Data: /* SBPRefundRequestResponse */ SBPRefundRequestResponse;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * SBPRefundStatus
         */
        export interface SBPRefundStatus {
            /**
             * ID запроса
             * example:
             * openapi-b96d770e-769f-49ce-9630-890e00d47720
             */
            requestId: string;
            /**
             * Статус по процессу возрата
             * An enumeration.
             * example:
             * Confirmed
             */
            status: "WaitingForClientConfirm" | "Initiated" | "WaitingForConfirm" | "Confirmed" | "WaitingForAccept" | "Accepted" | "Rejected";
            /**
             * Status Description
             * Описание статуса(причина ошибки или сообщение об успехе)
             */
            statusDescription?: string;
        }
        /**
         * SBPRefundStatusModel
         */
        export interface SBPRefundStatusModel {
            Data: /* SBPRefundStatus */ SBPRefundStatus;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * SecondSideModel
         */
        export interface SecondSideModel {
            /**
             * Account Id
             * example:
             * 40817810802000000008/044525104
             */
            accountId?: string;
            /**
             * Юридический адрес
             * example:
             * 624205, РОССИЯ, СВЕРДЛОВСКАЯ обл, ЛЕСНОЙ г, ЛЕНИНА ул, ДОМ 96, офис КВ. 19
             */
            legalAddress?: string;
            /**
             * КПП
             * example:
             * 668101001
             */
            kpp?: string;
            /**
             * Название банка
             * example:
             * ООО БАНК ТОЧКА
             */
            bankName?: string;
            /**
             * Корреспондентский счет банка
             * example:
             * 30101810745374525104
             */
            bankCorrAccount?: string;
            /**
             * ИНН покупателя или заказчика
             * example:
             * 660000000000
             */
            taxCode: string;
            /**
             * Тип покупателя или заказчика
             * An enumeration.
             * example:
             * company
             */
            type: "ip" | "company";
            /**
             * Наименование покупателя или заказчика
             * example:
             * ООО Студия дизайна М-АРТ
             */
            secondSideName?: string;
        }
        /**
         * SendDocumentToEmailRequestDataModel
         */
        export interface SendDocumentToEmailRequestDataModel {
            Data: /* SendDocumentToEmailRequestModel */ SendDocumentToEmailRequestModel;
        }
        /**
         * SendDocumentToEmailRequestModel
         */
        export interface SendDocumentToEmailRequestModel {
            /**
             * Электронная почта, на которую нужно отправить
             */
            email: string; // email
        }
        /**
         * StatementInitReqModel
         */
        export interface StatementInitReqModel {
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId: string;
            /**
             * Дата начала выписки. Используется стандарт ISO8601
             * example:
             * 2019-01-01
             */
            startDateTime: string; // date
            /**
             * Дата окончания выписки. Используется стандарт ISO8601
             * example:
             * 2019-01-01
             */
            endDateTime: string; // date
        }
        /**
         * StatementInitRequestDataModel
         * Метод создания выписки по счету
         */
        export interface StatementInitRequestDataModel {
            Data: /* StatementInitRequestModel */ StatementInitRequestModel;
        }
        /**
         * StatementInitRequestModel
         */
        export interface StatementInitRequestModel {
            Statement: /* StatementInitReqModel */ StatementInitReqModel;
        }
        /**
         * StatementInitResponseDataModel
         * Метод создания выписки по счету
         */
        export interface StatementInitResponseDataModel {
            Data: /* StatementInitResponseModel */ StatementInitResponseModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * StatementInitResponseModel
         */
        export interface StatementInitResponseModel {
            Statement: /* StatementModel */ StatementModel;
        }
        /**
         * StatementListModel
         */
        export interface StatementListModel {
            /**
             * Statement
             */
            Statement: /* StatementModel */ StatementModel[];
        }
        /**
         * StatementModel
         */
        export interface StatementModel {
            /**
             * Уникальный и неизменный идентификатор счёта
             * example:
             * 40817810802000000008/044525104
             */
            accountId?: string;
            /**
             * Идентификатор ресурса выписки
             * example:
             * 23489
             */
            statementId?: string;
            /**
             * Статус готовности выписки
             * An enumeration.
             * example:
             * Ready
             */
            status: "Created" | "Processing" | "Error" | "Ready";
            /**
             * Дата начала выписки. Используется стандарт ISO8601
             * example:
             * 2019-01-01
             */
            startDateTime: string; // date
            /**
             * Дата окончания выписки. Используется стандарт ISO8601
             * example:
             * 2019-01-01
             */
            endDateTime: string; // date
            /**
             * Баланс на начало запрашиваемого периода выписки в валюте счета
             * example:
             * 1234.5
             */
            startDateBalance?: number;
            /**
             * Баланс на конец запрашиваемого периода выписки в валюте счета
             * example:
             * 1234.5
             */
            endDateBalance?: number;
            /**
             * Дата и время создания ресурса. Используется стандарт ISO8601
             * example:
             * 2019-01-01T06:06:06.364+00:00
             */
            creationDateTime: string; // date-time
            /**
             * Transactions
             */
            Transaction?: /* TransactionModel */ TransactionModel[];
        }
        /**
         * StatementResponseDataModel
         * Метод получения выписки по счету
         */
        export interface StatementResponseDataModel {
            Data: /* StatementListModel */ StatementListModel;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * StatementStatus
         * An enumeration.
         */
        export type StatementStatus = "Created" | "Processing" | "Error" | "Ready";
        /**
         * Status
         */
        export interface Status {
            /**
             * Статус объекта
             * An enumeration.
             * example:
             * Active
             */
            status: "Active" | "Suspended";
        }
        /**
         * StatusEnum
         * An enumeration.
         */
        export type StatusEnum = "Active" | "Suspended";
        /**
         * StatusRequest
         */
        export interface StatusRequest {
            Data: /* Status */ Status;
        }
        /**
         * TaxFieldsModel
         */
        export interface TaxFieldsModel {
            /**
             * Статус плательщика бюджетного платежа
             */
            originatorStatus?: string;
            /**
             * КБК
             */
            kbk?: string;
            /**
             * ОКТМО
             */
            oktmo?: string;
            /**
             * Основание налогового платежа
             */
            base?: string;
            /**
             * Номер налогового документа
             */
            documentNumber?: string;
            /**
             * Дата налогового документа
             */
            documentDate?: /* Дата налогового документа */ number | string /* date */;
            /**
             * Вид платежа
             */
            type?: string;
            /**
             * Поле 107. Тут или период оплаты или код таможни или еще что-то
             */
            field107?: string;
        }
        /**
         * TaxSystemCodeInput
         * An enumeration.
         */
        export type TaxSystemCodeInput = "osn" | "usn_income" | "usn_income_outcome" | "esn" | "patent";
        /**
         * TaxSystemCodeOutput
         * Перечисление для выдачи результатов из openapi.
         */
        export type TaxSystemCodeOutput = "osn" | "usn_income" | "usn_income_outcome" | "esn" | "patent" | "envd";
        /**
         * MediaTypeEnum
         * An enumeration.
         */
        export type TochkaClientsNspkModelsNspkSbpTspManagerModelsMediaTypeEnum = "image/png" | "image/svg+xml";
        /**
         * QrTypeEnum
         * 01 - QR-Static (QR наклейка)
         * 02 - QR-Dynamic (QR на кассе)
         */
        export type TochkaClientsNspkModelsNspkSbpTspManagerModelsQrTypeEnum = "01" | "02";
        /**
         * TransactionAmountModel
         */
        export interface TransactionAmountModel {
            /**
             * Сумма транзакции запроса в валюте счета
             * example:
             * 1234.56
             */
            amount: number;
            /**
             * Сумма транзакции по счету запроса в рублях по курсу ЦБ на дату транзакции
             * example:
             * 400
             */
            amountNat?: number;
            /**
             * Валюта ведения счета. Используется стандарт ISO 4217
             * example:
             * RUB
             */
            currency: string;
        }
        /**
         * TransactionModel
         */
        export interface TransactionModel {
            /**
             * Уникальный идентификатор транзакции
             * example:
             * 23489
             */
            transactionId?: string;
            /**
             * Уникальный идентификатор платежа, по которому произошла транзакция
             * example:
             * abcd-11234
             */
            paymentId?: string;
            /**
             * Приход/Уход
             * An enumeration.
             * example:
             * Credit
             */
            creditDebitIndicator: "Credit" | "Debit";
            /**
             * Статус транзакции
             * An enumeration.
             * example:
             * Booked
             */
            status: "Booked" | "Pending";
            /**
             * Номер платежного документа
             * example:
             * 123456
             */
            documentNumber?: string;
            /**
             * Код типа транзакции (Вид платежного документа)
             * An enumeration.
             * example:
             * Платежный ордер
             */
            transactionTypeCode?: "\u041D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435" | "\u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0435 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0435" | "\u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0435" | "\u0414\u0435\u043D\u0435\u0436\u043D\u044B\u0439 \u0447\u0435\u043A, \u0420\u041A\u041E" | "\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0432\u0437\u043D\u043E\u0441 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438, \u041F\u041A\u041E" | "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0435-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0435" | "\u0418\u043D\u043A\u0430\u0441\u0441\u043E\u0432\u043E\u0435 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0435" | "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0447\u0435\u043A" | "\u0410\u043A\u043A\u0440\u0435\u0434\u0438\u0442\u0438\u0432" | "\u041C\u0435\u043C\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0440\u0434\u0435\u0440" | "\u041F\u043E\u0433\u0430\u0448\u0435\u043D\u0438\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u0430" | "\u0412\u044B\u0434\u0430\u0447\u0430 \u043A\u0440\u0435\u0434\u0438\u0442\u0430" | "\u0410\u0432\u0438\u0437\u043E" | "\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0435 \u043A\u0430\u0440\u0442\u044B" | "\u041F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0439 \u043E\u0440\u0434\u0435\u0440" | "\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043E\u0440\u0434\u0435\u0440" | "\u041E\u0440\u0434\u0435\u0440 \u043F\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u0435\u0439" | "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u044B\u0439 \u043E\u0440\u0434\u0435\u0440" | "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C";
            /**
             * Дата отражения на балансе
             * example:
             * 2019-01-01
             */
            documentProcessDate?: string; // date
            /**
             * Назначение платежа
             * example:
             * string
             */
            description?: string;
            Amount: /* TransactionAmountModel */ TransactionAmountModel;
            /**
             * Информация о контрагенте в случае кредитной операции
             */
            DebtorParty?: {
                /**
                 * ИНН контрагента
                 * example:
                 * 660000000000
                 */
                inn?: string;
                /**
                 * Наименование контрагента
                 * example:
                 * Индивидуальный Предприниматель Тест
                 */
                name?: string;
                /**
                 * КПП контрагента
                 * example:
                 * 660000000
                 */
                kpp?: string;
            };
            /**
             * Идентификация счета дебитора, в случае кредитной операции
             */
            DebtorAccount?: {
                /**
                 * Название схемы
                 * example:
                 * RU.CBR.PAN
                 */
                schemeName: string;
                /**
                 * Идентификатор счета(может отсутствовать в валютном платеже)
                 * example:
                 * 60000000000000000001
                 */
                identification?: string;
            };
            /**
             * Финансовое организация, обслуживающая счет дебитора
             */
            DebtorAgent?: {
                /**
                 * БИК/SWIFT банка агента
                 * example:
                 * RU.CBR.BIK
                 */
                schemeName?: string;
                /**
                 * БИК/SWIFT банка агента
                 * example:
                 * 000555777
                 */
                identification?: string;
                /**
                 * Номер кор. счета банка агента
                 * example:
                 * 000555777
                 */
                accountIdentification?: string;
                /**
                 * Наименование банка агента
                 * example:
                 * ПАО...
                 */
                name?: string;
            };
            /**
             * Информация о контрагенте в случае дебетовой транзакции
             */
            CreditorParty?: {
                /**
                 * ИНН контрагента
                 * example:
                 * 660000000000
                 */
                inn?: string;
                /**
                 * Наименование контрагента
                 * example:
                 * Индивидуальный Предприниматель Тест
                 */
                name?: string;
                /**
                 * КПП контрагента
                 * example:
                 * 660000000
                 */
                kpp?: string;
            };
            /**
             * Идентификация счета кредитора, в случае дебетовой транзакции
             */
            CreditorAccount?: {
                /**
                 * Название схемы
                 * example:
                 * RU.CBR.PAN
                 */
                schemeName: string;
                /**
                 * Идентификатор счета(может отсутствовать в валютном платеже)
                 * example:
                 * 60000000000000000001
                 */
                identification?: string;
            };
            /**
             * Финансовое организация, обслуживающая счет кредитора
             */
            CreditorAgent?: {
                /**
                 * БИК/SWIFT банка агента
                 * example:
                 * RU.CBR.BIK
                 */
                schemeName?: string;
                /**
                 * БИК/SWIFT банка агента
                 * example:
                 * 000555777
                 */
                identification?: string;
                /**
                 * Номер кор. счета банка агента
                 * example:
                 * 000555777
                 */
                accountIdentification?: string;
                /**
                 * Наименование банка агента
                 * example:
                 * ПАО...
                 */
                name?: string;
            };
            /**
             * Налоговые поля
             */
            TaxFields?: {
                /**
                 * Статус плательщика бюджетного платежа
                 */
                originatorStatus?: string;
                /**
                 * КБК
                 */
                kbk?: string;
                /**
                 * ОКТМО
                 */
                oktmo?: string;
                /**
                 * Основание налогового платежа
                 */
                base?: string;
                /**
                 * Номер налогового документа
                 */
                documentNumber?: string;
                /**
                 * Дата налогового документа
                 */
                documentDate?: /* Дата налогового документа */ number | string /* date */;
                /**
                 * Вид платежа
                 */
                type?: string;
                /**
                 * Поле 107. Тут или период оплаты или код таможни или еще что-то
                 */
                field107?: string;
            };
        }
        /**
         * UnauthorizedError
         */
        export interface UnauthorizedError {
            /**
             * Низкоуровневое текстовое описание ошибки
             * example:
             * HTTPUnauthorized
             */
            errorCode: string;
            /**
             * Описание ошибки. Обрезается если длина ошибки превышает максимальное значение
             * example:
             * Something going wrong
             */
            message: string;
            /**
             * URL для помощи в устранении проблемы
             * example:
             * "http://enter.tochka.com/open-banking/docs"
             */
            url: string;
        }
        /**
         * UnauthorizedErrorResponse
         */
        export interface UnauthorizedErrorResponse {
            /**
             * Высокоуровневый текстовый код ошибки, необходимый для классификации.
             * example:
             * 401
             */
            code: string;
            /**
             * Уникальный идентификатор ошибки, для целей аудита
             * example:
             * c397b21a-d998-4c4d-9471-e60eaf816b87
             */
            id: string;
            /**
             * Краткое сообщение об ошибке.
             * example:
             * Что-то пошло не так
             */
            message: string;
            /**
             * Errors
             */
            Errors: /* UnauthorizedError */ UnauthorizedError[];
        }
        /**
         * UnitCodeEnum
         * An enumeration.
         */
        export type UnitCodeEnum = "\u0448\u0442." | "\u0442\u044B\u0441.\u0448\u0442." | "\u043A\u043E\u043C\u043F\u043B." | "\u043F\u0430\u0440." | "\u0443\u0441\u043B.\u0435\u0434." | "\u0443\u043F\u0430\u043A." | "\u0443\u0441\u043B\u0443\u0433\u0430." | "\u043F\u0430\u0447." | "\u043C\u0438\u043D." | "\u0447." | "\u0441\u0443\u0442." | "\u0433." | "\u043A\u0433." | "\u043B." | "\u043C." | "\u043C2." | "\u043C3." | "\u043A\u043C." | "\u0433\u0430." | "\u043A\u0412\u0442." | "\u043A\u0412\u0442.\u0447.";
        /**
         * VatType
         * An enumeration.
         */
        export type VatType = "none" | "vat0" | "vat10" | "vat20" | "vat110" | "vat120";
        /**
         * Webhook
         */
        export interface Webhook {
            /**
             * Список событий, на которое подписано приложение
             * example:
             * [
             *   "incomingPayment"
             * ]
             */
            webhooksList: /**
             * WebhookTypeEnum
             * An enumeration.
             */
            WebhookTypeEnum[];
            /**
             * url на который необходимо отправлять запрос
             */
            url: string; // uri
        }
        /**
         * WebhookEditRequest
         */
        export interface WebhookEditRequest {
            /**
             * Новый список событий, на которые нужно подписаться
             * example:
             * [
             *   "incomingPayment"
             * ]
             */
            webhooksList: /**
             * WebhookTypeEnum
             * An enumeration.
             */
            WebhookTypeEnum[];
            /**
             * url на который необходимо отправлять запрос
             */
            url: string; // uri
        }
        /**
         * WebhookResponseModel
         */
        export interface WebhookResponseModel {
            Data: /* Webhook */ Webhook;
            Links: /* LinkModel */ LinkModel;
            Meta: /* MetaModel */ MetaModel;
        }
        /**
         * WebhookTestSendRequest
         */
        export interface WebhookTestSendRequest {
            /**
             * Тип вебхука
             * An enumeration.
             */
            webhookType: "incomingPayment" | "outgoingPayment" | "incomingSbpPayment" | "acquiringInternetPayment";
        }
        /**
         * WebhookTypeEnum
         * An enumeration.
         */
        export type WebhookTypeEnum = "incomingPayment" | "outgoingPayment" | "incomingSbpPayment" | "acquiringInternetPayment";
    }
}
declare namespace Paths {
    namespace ActivateCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdActivatePost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            export type QrcId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            qrcId: /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            Parameters.QrcId;
        }
        export type RequestBody = /* ActivateCashboxQrCodeRequestDataModel */ Components.Schemas.ActivateCashboxQrCodeRequestDataModel;
        namespace Responses {
            export type $200 = /* ActivateCashboxQrCodeResponseDataModel */ Components.Schemas.ActivateCashboxQrCodeResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace ChangeCashboxQrcodeAccountSbpApiVersionCashboxQrCodeQrcIdAccountPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            export type QrcId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            qrcId: /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            Parameters.QrcId;
        }
        export type RequestBody = /* ChangeCashboxQRCodeAccountRequestDataModel */ Components.Schemas.ChangeCashboxQRCodeAccountRequestDataModel;
        namespace Responses {
            export type $200 = /* ChangeCashboxQRCodeAccountResponseDataModel */ Components.Schemas.ChangeCashboxQRCodeAccountResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace CreateClosingDocumentInvoiceApiVersionClosingDocumentsPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export type RequestBody = /* ClosingDocumentCreateRequestDataModel */ Components.Schemas.ClosingDocumentCreateRequestDataModel;
        namespace Responses {
            export type $200 = /* DocumentCreateResponseModel */ Components.Schemas.DocumentCreateResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace CreateInvoiceInvoiceApiVersionBillsPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export type RequestBody = /* InvoiceCreateRequestDataModel */ Components.Schemas.InvoiceCreateRequestDataModel;
        namespace Responses {
            export type $200 = /* DocumentCreateResponseModel */ Components.Schemas.DocumentCreateResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace CreateNewConsentConsentApiVersionConsentsPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export type RequestBody = /* ConsentRequest */ Components.Schemas.ConsentRequest;
        namespace Responses {
            export type $200 = /* ConsentListResponse */ Components.Schemas.ConsentListResponse;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace CreatePaymentForSignPaymentApiVersionForSignPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export type RequestBody = /* PaymentForSignRequestDataModel */ Components.Schemas.PaymentForSignRequestDataModel;
        namespace Responses {
            export type $200 = /* PaymentForSignResponseDataModel */ Components.Schemas.PaymentForSignResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace CreatePaymentOperationAcquiringApiVersionPaymentsPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export type RequestBody = /* AcquiringCreatePaymentOperationRequestDataModel */ Components.Schemas.AcquiringCreatePaymentOperationRequestDataModel;
        namespace Responses {
            export type $200 = /* AcquiringCreatePaymentOperationResponseDataModel */ Components.Schemas.AcquiringCreatePaymentOperationResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace CreatePaymentOperationWithReceiptAcquiringApiVersionPaymentsWithReceiptPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export type RequestBody = /* AcquiringCreatePaymentOperationWithReceiptRequestDataModel */ Components.Schemas.AcquiringCreatePaymentOperationWithReceiptRequestDataModel;
        namespace Responses {
            export type $200 = /* AcquiringCreatePaymentOperationWithReceiptResponseDataModel */ Components.Schemas.AcquiringCreatePaymentOperationWithReceiptResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace CreatePaymentPaymentApiVersionOrderPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export type RequestBody = /* PaymentOrderRequestDataModel */ Components.Schemas.PaymentOrderRequestDataModel;
        namespace Responses {
            export type $200 = /* PaymentOrderResponseDataModel */ Components.Schemas.PaymentOrderResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace CreateWebhookWebhookApiVersionClientIdPut {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Client Id
             * Уникальный идентификатор приложения
             */
            export type ClientId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            client_id: /**
             * Client Id
             * Уникальный идентификатор приложения
             */
            Parameters.ClientId;
        }
        export type RequestBody = /* Webhook */ Components.Schemas.Webhook;
        namespace Responses {
            export type $200 = /* WebhookResponseModel */ Components.Schemas.WebhookResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace DeactivateCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdDeactivatePost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            export type QrcId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            qrcId: /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            Parameters.QrcId;
        }
        namespace Responses {
            export type $200 = /* DeactivateCashboxQrCodeResponseDataModel */ Components.Schemas.DeactivateCashboxQrCodeResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace DeleteClosingDocumentsInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdDelete {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Customercode
             * Уникальный код клиента
             */
            export type CustomerCode = string;
            /**
             * Documentid
             * Уникальный идентификатор документа
             */
            export type DocumentId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            customerCode: /**
             * Customercode
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
            documentId: /**
             * Documentid
             * Уникальный идентификатор документа
             */
            Parameters.DocumentId;
        }
        namespace Responses {
            export type $200 = /* BooleanResponseModel */ Components.Schemas.BooleanResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace DeleteInvoiceInvoiceApiVersionBillsCustomerCodeDocumentIdDelete {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Customercode
             * Уникальный код клиента
             */
            export type CustomerCode = string;
            /**
             * Documentid
             * Уникальный идентификатор документа
             */
            export type DocumentId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            customerCode: /**
             * Customercode
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
            documentId: /**
             * Documentid
             * Уникальный идентификатор документа
             */
            Parameters.DocumentId;
        }
        namespace Responses {
            export type $200 = /* BooleanResponseModel */ Components.Schemas.BooleanResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace DeleteWebhookWebhookApiVersionClientIdDelete {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Client Id
             * Уникальный идентификатор приложения
             */
            export type ClientId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            client_id: /**
             * Client Id
             * Уникальный идентификатор приложения
             */
            Parameters.ClientId;
        }
        namespace Responses {
            export type $200 = /* BooleanResponseModel */ Components.Schemas.BooleanResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace EditWebhookWebhookApiVersionClientIdPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Client Id
             * Уникальный идентификатор приложения
             */
            export type ClientId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            client_id: /**
             * Client Id
             * Уникальный идентификатор приложения
             */
            Parameters.ClientId;
        }
        export type RequestBody = /* WebhookEditRequest */ Components.Schemas.WebhookEditRequest;
        namespace Responses {
            export type $200 = /* WebhookResponseModel */ Components.Schemas.WebhookResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetAccountInfoOpenBankingApiVersionAccountsAccountIdGet {
        namespace Parameters {
            /**
             * Accountid
             * Уникальный и неизменный идентификатор счёта
             */
            export type AccountId = string;
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            accountId: /**
             * Accountid
             * Уникальный и неизменный идентификатор счёта
             */
            Parameters.AccountId;
        }
        namespace Responses {
            export type $200 = /**
             * AccountResponseModel
             * Метод получения информации по счёту
             */
            Components.Schemas.AccountResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetAccountsListOpenBankingApiVersionAccountsGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        namespace Responses {
            export type $200 = /**
             * AccountListResponseModel
             * Метод получения списка доступных счетов
             */
            Components.Schemas.ApplicationOpenBankingModelsExternalModelsAccountListResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetAccountsListSbpApiVersionAccountLegalIdGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Legalid
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             */
            export type LegalId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            legalId: /**
             * Legalid
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             */
            Parameters.LegalId;
        }
        namespace Responses {
            export type $200 = /* AccountListResponseModel */ Components.Schemas.ApplicationSbpModelsResponseModelsSbpAccountListResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetAllChildConsentsConsentApiVersionConsentsConsentIdChildGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Consentid
             * Уникальный идентификатор, предназначенный для идентификации разрешения
             */
            export type ConsentId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            consentId: /**
             * Consentid
             * Уникальный идентификатор, предназначенный для идентификации разрешения
             */
            Parameters.ConsentId;
        }
        namespace Responses {
            export type $200 = /* ConsentListResponse */ Components.Schemas.ConsentListResponse;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetAllConsentsListConsentApiVersionConsentsGet {
        export interface HeaderParameters {
            "customer-code"?: /**
             * Customer-Code
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
        }
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Customer-Code
             * Уникальный код клиента
             */
            export type CustomerCode = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        namespace Responses {
            export type $200 = /* ConsentListResponse */ Components.Schemas.ConsentListResponse;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetAuthorizedCardTransactionsOpenBankingApiVersionAccountsAccountIdAuthorizedCardTransactionsGet {
        namespace Parameters {
            /**
             * Accountid
             * Идентификатор счета
             */
            export type AccountId = string;
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            accountId: /**
             * Accountid
             * Идентификатор счета
             */
            Parameters.AccountId;
        }
        namespace Responses {
            export type $200 = /* CardTransactionsListResponseModel */ Components.Schemas.CardTransactionsListResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetBalanceInfoOpenBankingApiVersionAccountsAccountIdBalancesGet {
        namespace Parameters {
            /**
             * Accountid
             * Идентификатор счета
             */
            export type AccountId = string;
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            accountId: /**
             * Accountid
             * Идентификатор счета
             */
            Parameters.AccountId;
        }
        namespace Responses {
            export type $200 = /**
             * BalanceListResponseModel
             * Метод получения баланса
             */
            Components.Schemas.BalanceListResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetBalancesListOpenBankingApiVersionBalancesGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        namespace Responses {
            export type $200 = /**
             * BalanceListResponseModel
             * Метод получения баланса
             */
            Components.Schemas.BalanceListResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetCashboxQrcodeListSbpApiVersionCashboxQrCodeMerchantMerchantIdAccountIdGet {
        namespace Parameters {
            /**
             * Accountid
             * Уникальный и неизменный идентификатор счёта
             */
            export type AccountId = string;
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Merchantid
             * Идентификатор ТСП в СБП
             */
            export type MerchantId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            merchantId: /**
             * Merchantid
             * Идентификатор ТСП в СБП
             */
            Parameters.MerchantId;
            accountId: /**
             * Accountid
             * Уникальный и неизменный идентификатор счёта
             */
            Parameters.AccountId;
        }
        namespace Responses {
            export type $200 = /* GetCashboxQRCodeListResponseDataModel */ Components.Schemas.GetCashboxQRCodeListResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetCashboxQrcodeOperationInfoSbpApiVersionCashboxQrCodeQrcIdOperationGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Paramsid
             * Идентификатор активных значений параметров QR-кода
             */
            export type ParamsId = string;
            /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            export type QrcId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            qrcId: /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            Parameters.QrcId;
        }
        export interface QueryParameters {
            paramsId: /**
             * Paramsid
             * Идентификатор активных значений параметров QR-кода
             */
            Parameters.ParamsId;
        }
        namespace Responses {
            export type $200 = /* GetCashboxQrCodeOperationInfoResponseDataModel */ Components.Schemas.GetCashboxQrCodeOperationInfoResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            export type QrcId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            qrcId: /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            Parameters.QrcId;
        }
        export type RequestBody = /* GetCashboxQRCodeRequestDataModel */ Components.Schemas.GetCashboxQRCodeRequestDataModel;
        namespace Responses {
            export type $200 = /* GetCashboxQrCodeResponseDataModel */ Components.Schemas.GetCashboxQrCodeResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetCashboxQrcodeStatusSbpApiVersionCashboxQrCodeQrcIdStatusGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            export type QrcId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            qrcId: /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            Parameters.QrcId;
        }
        namespace Responses {
            export type $200 = /* GetCashboxQrCodeStatusResponseDataModel */ Components.Schemas.GetCashboxQrCodeStatusResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetClosingDocumentInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdFileGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Customercode
             * Уникальный код клиента
             */
            export type CustomerCode = string;
            /**
             * Documentid
             * Уникальный идентификатор документа
             */
            export type DocumentId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            customerCode: /**
             * Customercode
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
            documentId: /**
             * Documentid
             * Уникальный идентификатор документа
             */
            Parameters.DocumentId;
        }
        namespace Responses {
            export type $200 = any;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetConsentInfoConsentApiVersionConsentIdGet {
        export interface HeaderParameters {
            "customer-code"?: /**
             * Customer-Code
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
        }
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Consentid
             * Уникальный идентификатор, предназначенный для идентификации разрешения
             */
            export type ConsentId = string;
            /**
             * Customer-Code
             * Уникальный код клиента
             */
            export type CustomerCode = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            consentId: /**
             * Consentid
             * Уникальный идентификатор, предназначенный для идентификации разрешения
             */
            Parameters.ConsentId;
        }
        namespace Responses {
            export type $200 = /* ConsentResponse */ Components.Schemas.ConsentResponse;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetCustomerInfoOpenBankingApiVersionCustomersCustomerCodeGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Customercode
             * Идентификатор клиента
             */
            export type CustomerCode = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            customerCode: /**
             * Customercode
             * Идентификатор клиента
             */
            Parameters.CustomerCode;
        }
        namespace Responses {
            export type $200 = /**
             * CustomerResponseModel
             * Метод получения информации по клиенту
             */
            Components.Schemas.CustomerResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetCustomerInfoSbpApiVersionCustomerCustomerCodeBankCodeGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Bankcode
             * БИК банка
             */
            export type BankCode = string;
            /**
             * Customercode
             * Уникальный код клиента
             */
            export type CustomerCode = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            customerCode: /**
             * Customercode
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
            bankCode: /**
             * Bankcode
             * БИК банка
             */
            Parameters.BankCode;
        }
        namespace Responses {
            export type $200 = /* GetCustomerInfoResponseModelV3 */ Components.Schemas.GetCustomerInfoResponseModelV3;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetCustomersListOpenBankingApiVersionCustomersGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        namespace Responses {
            export type $200 = /**
             * CustomerListResponseModel
             * Метод получения списка доступных клиентов
             */
            Components.Schemas.CustomerListResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetInvoiceInvoiceApiVersionBillsCustomerCodeDocumentIdFileGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Customercode
             * Уникальный код клиента
             */
            export type CustomerCode = string;
            /**
             * Documentid
             * Уникальный идентификатор документа
             */
            export type DocumentId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            customerCode: /**
             * Customercode
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
            documentId: /**
             * Documentid
             * Уникальный идентификатор документа
             */
            Parameters.DocumentId;
        }
        namespace Responses {
            export type $200 = any;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetInvoicePaymentStatusInvoiceApiVersionBillsCustomerCodeDocumentIdPaymentStatusGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Customercode
             * Уникальный код клиента
             */
            export type CustomerCode = string;
            /**
             * Documentid
             * Уникальный идентификатор документа
             */
            export type DocumentId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            customerCode: /**
             * Customercode
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
            documentId: /**
             * Documentid
             * Уникальный идентификатор документа
             */
            Parameters.DocumentId;
        }
        namespace Responses {
            export type $200 = /* InvoicePaymentStatusResponseModel */ Components.Schemas.InvoicePaymentStatusResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetLegalEntitySbpApiVersionLegalEntityLegalIdGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Legalid
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             */
            export type LegalId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            legalId: /**
             * Legalid
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             */
            Parameters.LegalId;
        }
        namespace Responses {
            export type $200 = /* LegalEntityResponseModel */ Components.Schemas.LegalEntityResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetMerchantSbpApiVersionMerchantMerchantIdGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Идентификатор ТСП в СБП
             */
            export type MerchantId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            merchantId: /* Идентификатор ТСП в СБП */ Parameters.MerchantId;
        }
        namespace Responses {
            export type $200 = /* MerchantResponseModel */ Components.Schemas.MerchantResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetMerchantsListSbpApiVersionMerchantLegalEntityLegalIdGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Legalid
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             */
            export type LegalId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            legalId: /**
             * Legalid
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             */
            Parameters.LegalId;
        }
        namespace Responses {
            export type $200 = /* MerchantListResponseModel */ Components.Schemas.MerchantListResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetPaymentOperationInfoAcquiringApiVersionPaymentsOperationIdGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Operationid
             * Идентификатор платежа
             */
            export type OperationId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            operationId: /**
             * Operationid
             * Идентификатор платежа
             */
            Parameters.OperationId;
        }
        namespace Responses {
            export type $200 = /* AcquiringGetPaymentOperationInfoResponseDataModel */ Components.Schemas.AcquiringGetPaymentOperationInfoResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetPaymentOperationListAcquiringApiVersionPaymentsGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Customercode
             * Уникальный код клиента
             */
            export type CustomerCode = string;
            /**
             * Fromdate
             * Начало периода создания операций
             */
            export type FromDate = string;
            /**
             * Page
             * Номер страницы
             */
            export type Page = number;
            /**
             * Perpage
             * Количество записей на странице
             */
            export type PerPage = number;
            /**
             * AcquiringPaymentStatus
             * Статус операции
             */
            export type Status = "CREATED" | "APPROVED" | "ON-REFUND" | "REFUNDED" | "EXPIRED" | "REFUNDED_PARTIALLY";
            /**
             * Todate
             * Конец периода создания операций
             */
            export type ToDate = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export interface QueryParameters {
            customerCode: /**
             * Customercode
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
            fromDate?: /**
             * Fromdate
             * Начало периода создания операций
             */
            Parameters.FromDate;
            toDate?: /**
             * Todate
             * Конец периода создания операций
             */
            Parameters.ToDate;
            page?: /**
             * Page
             * Номер страницы
             */
            Parameters.Page;
            perPage?: /**
             * Perpage
             * Количество записей на странице
             */
            Parameters.PerPage;
            status?: /**
             * AcquiringPaymentStatus
             * Статус операции
             */
            Parameters.Status;
        }
        namespace Responses {
            export type $200 = /* AcquiringGetPaymentOperationListResponseDataModel */ Components.Schemas.AcquiringGetPaymentOperationListResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetPaymentStatusPaymentApiVersionStatusRequestIdGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Requestid
             * Идентификатор запроса
             */
            export type RequestId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            requestId: /**
             * Requestid
             * Идентификатор запроса
             */
            Parameters.RequestId;
        }
        namespace Responses {
            export type $200 = /* PaymentStatusResponseDataModel */ Components.Schemas.PaymentStatusResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetPaymentsSbpApiVersionGetSbpPaymentsGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Customercode
             * Уникальный код клиента
             */
            export type CustomerCode = string;
            /**
             * Fromdate
             * Начало периода для запроса статусов платежей. При отсутствии параметра в запросе будет задано дефолтное значение
             */
            export type FromDate = string;
            /**
             * Page
             * Номер страницы
             */
            export type Page = number;
            /**
             * Perpage
             * Количество записей на странице
             */
            export type PerPage = number;
            /**
             * Qrcid
             * ID qr-кода для фильтрации
             */
            export type QrcId = string;
            /**
             * Todate
             * Конец периода для запроса статусов платежей
             */
            export type ToDate = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export interface QueryParameters {
            customerCode: /**
             * Customercode
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
            qrcId?: /**
             * Qrcid
             * ID qr-кода для фильтрации
             */
            Parameters.QrcId;
            fromDate?: /**
             * Fromdate
             * Начало периода для запроса статусов платежей. При отсутствии параметра в запросе будет задано дефолтное значение
             */
            Parameters.FromDate;
            toDate?: /**
             * Todate
             * Конец периода для запроса статусов платежей
             */
            Parameters.ToDate;
            page?: /**
             * Page
             * Номер страницы
             */
            Parameters.Page;
            perPage?: /**
             * Perpage
             * Количество записей на странице
             */
            Parameters.PerPage;
        }
        namespace Responses {
            export type $200 = /* SBPPaymentsResponse */ Components.Schemas.SBPPaymentsResponse;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetQrCodeSbpApiVersionQrCodeQrcIdGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            export type QrcId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            qrcId: /**
             * Qrcid
             * Идентификатор QR-кода в СБП
             */
            Parameters.QrcId;
        }
        namespace Responses {
            export type $200 = /* QRCodeResponseModel */ Components.Schemas.QRCodeResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetQrCodesListSbpApiVersionQrCodeLegalEntityLegalIdGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Legalid
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             */
            export type LegalId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            legalId: /**
             * Legalid
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             */
            Parameters.LegalId;
        }
        namespace Responses {
            export type $200 = /* QRCodeListResponseModel */ Components.Schemas.QRCodeListResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetQrCodesPaymentStatusSbpApiVersionQrCodesQrcIdsPaymentStatusGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Qrc Ids
             * Список qr-кодов для запроса статусов, разделенных через запятую
             */
            export type QrcIds = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            qrc_ids: /**
             * Qrc Ids
             * Список qr-кодов для запроса статусов, разделенных через запятую
             */
            Parameters.QrcIds;
        }
        namespace Responses {
            export type $200 = /* QRCodePaymentStatusListResponseModel */ Components.Schemas.QRCodePaymentStatusListResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetRefundDataSbpApiVersionRefundRequestIdGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Request Id
             * ID запроса
             */
            export type RequestId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            request_id: /**
             * Request Id
             * ID запроса
             */
            Parameters.RequestId;
        }
        namespace Responses {
            export type $200 = /* SBPRefundStatusModel */ Components.Schemas.SBPRefundStatusModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetRetailersAcquiringApiVersionRetailersGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Customercode
             * Уникальный код клиента
             */
            export type CustomerCode = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export interface QueryParameters {
            customerCode: /**
             * Customercode
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
        }
        namespace Responses {
            export type $200 = /* AcquiringRetailerListResponseModel */ Components.Schemas.AcquiringRetailerListResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetStatementOpenBankingApiVersionAccountsAccountIdStatementsStatementIdGet {
        namespace Parameters {
            /**
             * Accountid
             * Идентификатор счета
             */
            export type AccountId = string;
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Statementid
             * Идентификатор выписки
             */
            export type StatementId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            accountId: /**
             * Accountid
             * Идентификатор счета
             */
            Parameters.AccountId;
            statementId: /**
             * Statementid
             * Идентификатор выписки
             */
            Parameters.StatementId;
        }
        namespace Responses {
            export type $200 = /**
             * StatementResponseDataModel
             * Метод получения выписки по счету
             */
            Components.Schemas.StatementResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetStatementsListOpenBankingApiVersionStatementsGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Limit
             * Максимальное количество выписок в ответе
             */
            export type Limit = number;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export interface QueryParameters {
            limit?: /**
             * Limit
             * Максимальное количество выписок в ответе
             */
            Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /**
             * StatementResponseDataModel
             * Метод получения выписки по счету
             */
            Components.Schemas.StatementResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace GetWebhooksWebhookApiVersionClientIdGet {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Client Id
             * Уникальный идентификатор приложения
             */
            export type ClientId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            client_id: /**
             * Client Id
             * Уникальный идентификатор приложения
             */
            Parameters.ClientId;
        }
        namespace Responses {
            export type $200 = /* WebhookResponseModel */ Components.Schemas.WebhookResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace InitStatementOpenBankingApiVersionStatementsPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export type RequestBody = /**
         * StatementInitRequestDataModel
         * Метод создания выписки по счету
         */
        Components.Schemas.StatementInitRequestDataModel;
        namespace Responses {
            export type $200 = /**
             * StatementInitResponseDataModel
             * Метод создания выписки по счету
             */
            Components.Schemas.StatementInitResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace RefundPaymentOperationAcquiringApiVersionPaymentsOperationIdRefundPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Operationid
             * Идентификатор платежа
             */
            export type OperationId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            operationId: /**
             * Operationid
             * Идентификатор платежа
             */
            Parameters.OperationId;
        }
        export type RequestBody = /* AcquiringPaymentOrderRefundRequestDataModel */ Components.Schemas.AcquiringPaymentOrderRefundRequestDataModel;
        namespace Responses {
            export type $200 = /* AcquiringPaymentOperationRefundResponseModel */ Components.Schemas.AcquiringPaymentOperationRefundResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace RegisterCashboxQrcodeSbpApiVersionCashboxQrCodePost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export type RequestBody = /* RegisterCashboxQrCodeRequestDataModel */ Components.Schemas.RegisterCashboxQrCodeRequestDataModel;
        namespace Responses {
            export type $200 = /* RegisterCashboxQrCodeResponseDataModel */ Components.Schemas.RegisterCashboxQrCodeResponseDataModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace RegisterLegalEntitySbpApiVersionRegisterSbpLegalEntityPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export type RequestBody = /* CustomerCodeAndBankCodeRequest */ Components.Schemas.CustomerCodeAndBankCodeRequest;
        namespace Responses {
            export type $200 = /* RegisterLegalEntityResponseModel */ Components.Schemas.RegisterLegalEntityResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace RegisterMerchantSbpApiVersionMerchantLegalEntityLegalIdPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Legalid
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             */
            export type LegalId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            legalId: /**
             * Legalid
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             */
            Parameters.LegalId;
        }
        export type RequestBody = /* RegisterMerchantRequest */ Components.Schemas.RegisterMerchantRequest;
        namespace Responses {
            export type $200 = /* MerchantIdResponseModel */ Components.Schemas.MerchantIdResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace RegisterQrCodeSbpApiVersionQrCodeMerchantMerchantIdAccountIdPost {
        namespace Parameters {
            /**
             * Уникальный и неизменный идентификатор счёта юрлица
             */
            export type AccountId = string;
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Merchantid
             * Идентификатор ТСП в СБП
             */
            export type MerchantId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            accountId: /* Уникальный и неизменный идентификатор счёта юрлица */ Parameters.AccountId;
            merchantId: /**
             * Merchantid
             * Идентификатор ТСП в СБП
             */
            Parameters.MerchantId;
        }
        export type RequestBody = /* RegisterQRCodeRequest */ Components.Schemas.RegisterQRCodeRequest;
        namespace Responses {
            export type $200 = /* QRCodeModelResponseModel */ Components.Schemas.QRCodeModelResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace SendClosingDocumentsToEmailInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdEmailPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Customercode
             * Уникальный код клиента
             */
            export type CustomerCode = string;
            /**
             * Documentid
             * Уникальный идентификатор документа
             */
            export type DocumentId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            customerCode: /**
             * Customercode
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
            documentId: /**
             * Documentid
             * Уникальный идентификатор документа
             */
            Parameters.DocumentId;
        }
        export type RequestBody = /* SendDocumentToEmailRequestDataModel */ Components.Schemas.SendDocumentToEmailRequestDataModel;
        namespace Responses {
            export type $200 = /* BooleanResponseModel */ Components.Schemas.BooleanResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace SendInvoiceToEmailInvoiceApiVersionBillsCustomerCodeDocumentIdEmailPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Customercode
             * Уникальный код клиента
             */
            export type CustomerCode = string;
            /**
             * Documentid
             * Уникальный идентификатор документа
             */
            export type DocumentId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            customerCode: /**
             * Customercode
             * Уникальный код клиента
             */
            Parameters.CustomerCode;
            documentId: /**
             * Documentid
             * Уникальный идентификатор документа
             */
            Parameters.DocumentId;
        }
        export type RequestBody = /* SendDocumentToEmailRequestDataModel */ Components.Schemas.SendDocumentToEmailRequestDataModel;
        namespace Responses {
            export type $200 = /* BooleanResponseModel */ Components.Schemas.BooleanResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace SendWebhookWebhookApiVersionClientIdTestSendPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Client Id
             * Уникальный идентификатор приложения
             */
            export type ClientId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            client_id: /**
             * Client Id
             * Уникальный идентификатор приложения
             */
            Parameters.ClientId;
        }
        export type RequestBody = /* WebhookTestSendRequest */ Components.Schemas.WebhookTestSendRequest;
        namespace Responses {
            export type $200 = /* BooleanResponseModel */ Components.Schemas.BooleanResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace SetLegalEntityStatusSbpApiVersionLegalEntityLegalIdPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Legalid
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             */
            export type LegalId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            legalId: /**
             * Legalid
             * Идентификатор зарегистрированного юрлица в СБП (12 символов)
             */
            Parameters.LegalId;
        }
        export type RequestBody = /* StatusRequest */ Components.Schemas.StatusRequest;
        namespace Responses {
            export type $200 = /* BooleanResponseModel */ Components.Schemas.BooleanResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace SetMerchantStatusSbpApiVersionMerchantMerchantIdPut {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
            /**
             * Идентификатор ТСП в СБП
             */
            export type MerchantId = string;
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
            merchantId: /* Идентификатор ТСП в СБП */ Parameters.MerchantId;
        }
        export type RequestBody = /* StatusRequest */ Components.Schemas.StatusRequest;
        namespace Responses {
            export type $200 = /* BooleanResponseModel */ Components.Schemas.BooleanResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
    namespace StartRefundSbpApiVersionRefundPost {
        namespace Parameters {
            /**
             * ApiVersion
             * Версия API
             */
            export type ApiVersion = "v1.0";
        }
        export interface PathParameters {
            apiVersion: /**
             * ApiVersion
             * Версия API
             */
            Parameters.ApiVersion;
        }
        export type RequestBody = /* SBPRefundRequest */ Components.Schemas.SBPRefundRequest;
        namespace Responses {
            export type $200 = /* SBPRefundRequestResponseModel */ Components.Schemas.SBPRefundRequestResponseModel;
            export type $400 = /* BadRequestErrorResponse */ Components.Schemas.BadRequestErrorResponse;
            export type $401 = /* UnauthorizedErrorResponse */ Components.Schemas.UnauthorizedErrorResponse;
            export type $403 = /* ForbiddenErrorResponse */ Components.Schemas.ForbiddenErrorResponse;
            export type $404 = /* NotFoundErrorResponse */ Components.Schemas.NotFoundErrorResponse;
            export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
        }
    }
}

export interface OperationMethods {
  /**
   * get_payment_operation_list_acquiring__apiVersion__payments_get - Get Payment Operation List
   * 
   * Метод для получения списка операций
   * 
   * - _CREATED_ - Операция создана
   * - _APPROVED_ - Операция одобрена (оплата прошла успешно)
   * - _ON-REFUND_ - Операция заблокирована на время выполнения возврата
   * - _REFUNDED_ - Осуществлен возврат
   * - _EXPIRED_ - Истек срок действия
   * 
   */
  'get_payment_operation_list_acquiring__apiVersion__payments_get'(
    parameters?: Parameters<Paths.GetPaymentOperationListAcquiringApiVersionPaymentsGet.QueryParameters & Paths.GetPaymentOperationListAcquiringApiVersionPaymentsGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPaymentOperationListAcquiringApiVersionPaymentsGet.Responses.$200>
  /**
   * create_payment_operation_acquiring__apiVersion__payments_post - Create Payment Operation
   * 
   * Метод для создания ссылки на оплату
   */
  'create_payment_operation_acquiring__apiVersion__payments_post'(
    parameters?: Parameters<Paths.CreatePaymentOperationAcquiringApiVersionPaymentsPost.PathParameters> | null,
    data?: Paths.CreatePaymentOperationAcquiringApiVersionPaymentsPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreatePaymentOperationAcquiringApiVersionPaymentsPost.Responses.$200>
  /**
   * get_payment_operation_info_acquiring__apiVersion__payments__operationId__get - Get Payment Operation Info
   * 
   * Метод для получения информации о конкретной операции
   * 
   * - _CREATED_ - Операция создана
   * - _APPROVED_ - Операция одобрена (оплата прошла успешно)
   * - _ON-REFUND_ - Операция заблокирована на время выполнения возврата
   * - _REFUNDED_ - Осуществлен возврат
   * - _EXPIRED_ - Истек срок действия
   * 
   */
  'get_payment_operation_info_acquiring__apiVersion__payments__operationId__get'(
    parameters?: Parameters<Paths.GetPaymentOperationInfoAcquiringApiVersionPaymentsOperationIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPaymentOperationInfoAcquiringApiVersionPaymentsOperationIdGet.Responses.$200>
  /**
   * refund_payment_operation_acquiring__apiVersion__payments__operationId__refund_post - Refund Payment Operation
   * 
   * Метод для возврата платежа по карте  
   * Возврат возможен только для платежа со статусом _APPROVED_
   */
  'refund_payment_operation_acquiring__apiVersion__payments__operationId__refund_post'(
    parameters?: Parameters<Paths.RefundPaymentOperationAcquiringApiVersionPaymentsOperationIdRefundPost.PathParameters> | null,
    data?: Paths.RefundPaymentOperationAcquiringApiVersionPaymentsOperationIdRefundPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RefundPaymentOperationAcquiringApiVersionPaymentsOperationIdRefundPost.Responses.$200>
  /**
   * create_payment_operation_with_receipt_acquiring__apiVersion__payments_with_receipt_post - Create Payment Operation With Receipt
   * 
   * Метод для создания ссылки на оплату и отправки чека
   */
  'create_payment_operation_with_receipt_acquiring__apiVersion__payments_with_receipt_post'(
    parameters?: Parameters<Paths.CreatePaymentOperationWithReceiptAcquiringApiVersionPaymentsWithReceiptPost.PathParameters> | null,
    data?: Paths.CreatePaymentOperationWithReceiptAcquiringApiVersionPaymentsWithReceiptPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreatePaymentOperationWithReceiptAcquiringApiVersionPaymentsWithReceiptPost.Responses.$200>
  /**
   * get_retailers_acquiring__apiVersion__retailers_get - Get Retailers
   * 
   * Метод для получения информации о ретейлере
   * 
   * - _NEW_ - Ретейлер создан
   * - _ADDRESS_DADATA_ - Адрес уточнен
   * - _OPEN_ACCOUNT_ - Счёт открыт
   * - _TWPG_SENDED_ - Данные мерчанта и терминала отправлены в процессинг
   * - _RETAILER_CREATED_ - Мерчант создан в процессинге
   * - _TERMINAL_CREATED_ - Терминал создан в процессинге
   * - _FILE_SENT_ - файл отправлен в НСПК
   * - _REG_ - Зарегистрирован
   * - _CLOSE_ - Закрыт
   * 
   */
  'get_retailers_acquiring__apiVersion__retailers_get'(
    parameters?: Parameters<Paths.GetRetailersAcquiringApiVersionRetailersGet.QueryParameters & Paths.GetRetailersAcquiringApiVersionRetailersGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetRetailersAcquiringApiVersionRetailersGet.Responses.$200>
  /**
   * get_all_consents_list_consent__apiVersion__consents_get - Get All Consents List
   * 
   * Метод для получения списка разрешений
   * 
   */
  'get_all_consents_list_consent__apiVersion__consents_get'(
    parameters?: Parameters<Paths.GetAllConsentsListConsentApiVersionConsentsGet.HeaderParameters & Paths.GetAllConsentsListConsentApiVersionConsentsGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAllConsentsListConsentApiVersionConsentsGet.Responses.$200>
  /**
   * create_new_consent_consent__apiVersion__consents_post - Create New Consent
   * 
   * Метод для создания разрешения
   * 
   */
  'create_new_consent_consent__apiVersion__consents_post'(
    parameters?: Parameters<Paths.CreateNewConsentConsentApiVersionConsentsPost.PathParameters> | null,
    data?: Paths.CreateNewConsentConsentApiVersionConsentsPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateNewConsentConsentApiVersionConsentsPost.Responses.$200>
  /**
   * get_all_child_consents_consent__apiVersion__consents__consentId__child_get - Get All Child Consents
   * 
   * Метод для получения всех дочерних разрешений
   * 
   */
  'get_all_child_consents_consent__apiVersion__consents__consentId__child_get'(
    parameters?: Parameters<Paths.GetAllChildConsentsConsentApiVersionConsentsConsentIdChildGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAllChildConsentsConsentApiVersionConsentsConsentIdChildGet.Responses.$200>
  /**
   * get_consent_info_consent__apiVersion___consentId__get - Get Consent Info
   * 
   * Метод для получения информации о списке разрешений
   * 
   */
  'get_consent_info_consent__apiVersion___consentId__get'(
    parameters?: Parameters<Paths.GetConsentInfoConsentApiVersionConsentIdGet.HeaderParameters & Paths.GetConsentInfoConsentApiVersionConsentIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetConsentInfoConsentApiVersionConsentIdGet.Responses.$200>
  /**
   * create_invoice_invoice__apiVersion__bills_post - Create Invoice
   * 
   * Метод создания счета на оплату
   */
  'create_invoice_invoice__apiVersion__bills_post'(
    parameters?: Parameters<Paths.CreateInvoiceInvoiceApiVersionBillsPost.PathParameters> | null,
    data?: Paths.CreateInvoiceInvoiceApiVersionBillsPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateInvoiceInvoiceApiVersionBillsPost.Responses.$200>
  /**
   * delete_invoice_invoice__apiVersion__bills__customerCode___documentId__delete - Delete Invoice
   * 
   * Метод для удаления счета на оплату
   */
  'delete_invoice_invoice__apiVersion__bills__customerCode___documentId__delete'(
    parameters?: Parameters<Paths.DeleteInvoiceInvoiceApiVersionBillsCustomerCodeDocumentIdDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteInvoiceInvoiceApiVersionBillsCustomerCodeDocumentIdDelete.Responses.$200>
  /**
   * send_invoice_to_email_invoice__apiVersion__bills__customerCode___documentId__email_post - Send Invoice To Email
   * 
   * Метод отправки счета на оплату на почту
   */
  'send_invoice_to_email_invoice__apiVersion__bills__customerCode___documentId__email_post'(
    parameters?: Parameters<Paths.SendInvoiceToEmailInvoiceApiVersionBillsCustomerCodeDocumentIdEmailPost.PathParameters> | null,
    data?: Paths.SendInvoiceToEmailInvoiceApiVersionBillsCustomerCodeDocumentIdEmailPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendInvoiceToEmailInvoiceApiVersionBillsCustomerCodeDocumentIdEmailPost.Responses.$200>
  /**
   * get_invoice_invoice__apiVersion__bills__customerCode___documentId__file_get - Get Invoice
   * 
   * Метод получения файла выставленного счета
   */
  'get_invoice_invoice__apiVersion__bills__customerCode___documentId__file_get'(
    parameters?: Parameters<Paths.GetInvoiceInvoiceApiVersionBillsCustomerCodeDocumentIdFileGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInvoiceInvoiceApiVersionBillsCustomerCodeDocumentIdFileGet.Responses.$200>
  /**
   * get_invoice_payment_status_invoice__apiVersion__bills__customerCode___documentId__payment_status_get - Get Invoice Payment Status
   * 
   * Метод получения статуса счета
   */
  'get_invoice_payment_status_invoice__apiVersion__bills__customerCode___documentId__payment_status_get'(
    parameters?: Parameters<Paths.GetInvoicePaymentStatusInvoiceApiVersionBillsCustomerCodeDocumentIdPaymentStatusGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInvoicePaymentStatusInvoiceApiVersionBillsCustomerCodeDocumentIdPaymentStatusGet.Responses.$200>
  /**
   * create_closing_document_invoice__apiVersion__closing_documents_post - Create Closing Document
   * 
   * Метод создания закрывающего документа
   */
  'create_closing_document_invoice__apiVersion__closing_documents_post'(
    parameters?: Parameters<Paths.CreateClosingDocumentInvoiceApiVersionClosingDocumentsPost.PathParameters> | null,
    data?: Paths.CreateClosingDocumentInvoiceApiVersionClosingDocumentsPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateClosingDocumentInvoiceApiVersionClosingDocumentsPost.Responses.$200>
  /**
   * delete_closing_documents_invoice__apiVersion__closing_documents__customerCode___documentId__delete - Delete Closing Documents
   * 
   * Метод для удаления закрывающего документа
   */
  'delete_closing_documents_invoice__apiVersion__closing_documents__customerCode___documentId__delete'(
    parameters?: Parameters<Paths.DeleteClosingDocumentsInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteClosingDocumentsInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdDelete.Responses.$200>
  /**
   * send_closing_documents_to_email_invoice__apiVersion__closing_documents__customerCode___documentId__email_post - Send Closing Documents To Email
   * 
   * Метод отправки закрывающего документа на почту
   */
  'send_closing_documents_to_email_invoice__apiVersion__closing_documents__customerCode___documentId__email_post'(
    parameters?: Parameters<Paths.SendClosingDocumentsToEmailInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdEmailPost.PathParameters> | null,
    data?: Paths.SendClosingDocumentsToEmailInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdEmailPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendClosingDocumentsToEmailInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdEmailPost.Responses.$200>
  /**
   * get_closing_document_invoice__apiVersion__closing_documents__customerCode___documentId__file_get - Get Closing Document
   * 
   * Метод получения файла закрывающего документа
   */
  'get_closing_document_invoice__apiVersion__closing_documents__customerCode___documentId__file_get'(
    parameters?: Parameters<Paths.GetClosingDocumentInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdFileGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetClosingDocumentInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdFileGet.Responses.$200>
  /**
   * get_accounts_list_open_banking__apiVersion__accounts_get - Get Accounts List
   * 
   * Метод для получения списка доступных счетов
   * 
   */
  'get_accounts_list_open_banking__apiVersion__accounts_get'(
    parameters?: Parameters<Paths.GetAccountsListOpenBankingApiVersionAccountsGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAccountsListOpenBankingApiVersionAccountsGet.Responses.$200>
  /**
   * get_account_info_open_banking__apiVersion__accounts__accountId__get - Get Account Info
   * 
   * Метод для получения информации по конкретному счёту
   * 
   */
  'get_account_info_open_banking__apiVersion__accounts__accountId__get'(
    parameters?: Parameters<Paths.GetAccountInfoOpenBankingApiVersionAccountsAccountIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAccountInfoOpenBankingApiVersionAccountsAccountIdGet.Responses.$200>
  /**
   * get_authorized_card_transactions_open_banking__apiVersion__accounts__accountId__authorized_card_transactions_get - Get Authorized Card Transactions
   * 
   * Метод получения авторизованных карточных транзакций конкретного счета
   */
  'get_authorized_card_transactions_open_banking__apiVersion__accounts__accountId__authorized_card_transactions_get'(
    parameters?: Parameters<Paths.GetAuthorizedCardTransactionsOpenBankingApiVersionAccountsAccountIdAuthorizedCardTransactionsGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAuthorizedCardTransactionsOpenBankingApiVersionAccountsAccountIdAuthorizedCardTransactionsGet.Responses.$200>
  /**
   * get_balance_info_open_banking__apiVersion__accounts__accountId__balances_get - Get Balance Info
   * 
   * Метод для получения информации о балансе конкретного счёта
   * 
   */
  'get_balance_info_open_banking__apiVersion__accounts__accountId__balances_get'(
    parameters?: Parameters<Paths.GetBalanceInfoOpenBankingApiVersionAccountsAccountIdBalancesGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBalanceInfoOpenBankingApiVersionAccountsAccountIdBalancesGet.Responses.$200>
  /**
   * get_statement_open_banking__apiVersion__accounts__accountId__statements__statementId__get - Get Statement
   * 
   * Метод для получения конкретной выписки  
   * 
   * После вызова метода `Init Statement` с помощью `statementId` можно отследить, на каком этапе создание определённой выписки.  
   * 
   * Есть три статуса:
   * - _Created_ — создан запрос на выписку;  
   * - _Processing_ — запрос в обработке;  
   * - _Ready_ — выписка готова.
   * 
   * **Особенности:**  
   * Метод _Init Statement_ отрабатывает асинхронно. Отражаются только операции, находящиеся в финальном статусе — _Ready_.
   * 
   */
  'get_statement_open_banking__apiVersion__accounts__accountId__statements__statementId__get'(
    parameters?: Parameters<Paths.GetStatementOpenBankingApiVersionAccountsAccountIdStatementsStatementIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetStatementOpenBankingApiVersionAccountsAccountIdStatementsStatementIdGet.Responses.$200>
  /**
   * get_balances_list_open_banking__apiVersion__balances_get - Get Balances List
   * 
   * Метод для получения баланса по нескольким счетам
   * 
   */
  'get_balances_list_open_banking__apiVersion__balances_get'(
    parameters?: Parameters<Paths.GetBalancesListOpenBankingApiVersionBalancesGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBalancesListOpenBankingApiVersionBalancesGet.Responses.$200>
  /**
   * get_customers_list_open_banking__apiVersion__customers_get - Get Customers List
   * 
   * Метод для получения списка доступных клиентов
   * 
   */
  'get_customers_list_open_banking__apiVersion__customers_get'(
    parameters?: Parameters<Paths.GetCustomersListOpenBankingApiVersionCustomersGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomersListOpenBankingApiVersionCustomersGet.Responses.$200>
  /**
   * get_customer_info_open_banking__apiVersion__customers__customerCode__get - Get Customer Info
   * 
   * Метод для получения информации по конкретному клиенту
   * 
   */
  'get_customer_info_open_banking__apiVersion__customers__customerCode__get'(
    parameters?: Parameters<Paths.GetCustomerInfoOpenBankingApiVersionCustomersCustomerCodeGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomerInfoOpenBankingApiVersionCustomersCustomerCodeGet.Responses.$200>
  /**
   * get_statements_list_open_banking__apiVersion__statements_get - Get Statements List
   * 
   * Метод для получения списка доступных выписок  
   * 
   * После вызова метода `Init Statement` можно отследить, в каком статусе готовящаяся выписка:  
   * - _Created_ — только создан запрос на выписку;
   * - _Processing_ — запрос в обработке;
   * - _Ready_ — выписка готова.
   * 
   * **Особенности:**  
   * Отражаются только операции, находящиеся в финальном статусе — _Ready_.
   */
  'get_statements_list_open_banking__apiVersion__statements_get'(
    parameters?: Parameters<Paths.GetStatementsListOpenBankingApiVersionStatementsGet.QueryParameters & Paths.GetStatementsListOpenBankingApiVersionStatementsGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetStatementsListOpenBankingApiVersionStatementsGet.Responses.$200>
  /**
   * init_statement_open_banking__apiVersion__statements_post - Init Statement
   * 
   * Метод для создания выписки по конкретному счёту
   * 
   */
  'init_statement_open_banking__apiVersion__statements_post'(
    parameters?: Parameters<Paths.InitStatementOpenBankingApiVersionStatementsPost.PathParameters> | null,
    data?: Paths.InitStatementOpenBankingApiVersionStatementsPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.InitStatementOpenBankingApiVersionStatementsPost.Responses.$200>
  /**
   * create_payment_for_sign_payment__apiVersion__for_sign_post - Create Payment For Sign
   * 
   * Метод для создания платежа.  
   * 
   * Если вы создаёте платёж за третье лицо в бюджет, заполните поля `payerINN` и `payerKPP`.
   * 
   * **Обратите внимание:**  
   * _paymentDate_ нужно заполнить по часовому поясу Москвы.
   * 
   */
  'create_payment_for_sign_payment__apiVersion__for_sign_post'(
    parameters?: Parameters<Paths.CreatePaymentForSignPaymentApiVersionForSignPost.PathParameters> | null,
    data?: Paths.CreatePaymentForSignPaymentApiVersionForSignPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreatePaymentForSignPaymentApiVersionForSignPost.Responses.$200>
  /**
   * create_payment_payment__apiVersion__order_post - Create Payment
   * 
   * Метод для создания и подписания платежа.  
   * 
   * - Если вы создаёте платеж в бюджет, то необходимо заполнить поле `payerKPP`
   * - Если вы создаёте платёж _за третье лицо в бюджет_, заполните поля `payerINN` и `payerKPP`.
   * 
   * **Обратите внимание:**  
   * _paymentDate_ нужно заполнить по часовому поясу Москвы.
   * 
   */
  'create_payment_payment__apiVersion__order_post'(
    parameters?: Parameters<Paths.CreatePaymentPaymentApiVersionOrderPost.PathParameters> | null,
    data?: Paths.CreatePaymentPaymentApiVersionOrderPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreatePaymentPaymentApiVersionOrderPost.Responses.$200>
  /**
   * get_payment_status_payment__apiVersion__status__requestId__get - Get Payment Status
   * 
   * Метод для получения статуса платежа
   * 
   */
  'get_payment_status_payment__apiVersion__status__requestId__get'(
    parameters?: Parameters<Paths.GetPaymentStatusPaymentApiVersionStatusRequestIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPaymentStatusPaymentApiVersionStatusRequestIdGet.Responses.$200>
  /**
   * get_accounts_list_sbp__apiVersion__account__legalId__get - Get Accounts List
   * 
   * Метод для получения списка счетов юрлица в Системе быстрых платежей
   * 
   */
  'get_accounts_list_sbp__apiVersion__account__legalId__get'(
    parameters?: Parameters<Paths.GetAccountsListSbpApiVersionAccountLegalIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAccountsListSbpApiVersionAccountLegalIdGet.Responses.$200>
  /**
   * register_cashbox_qrcode_sbp__apiVersion__cashbox_qr_code_post - Register Cashbox Qrcode
   * 
   * Регистрирует новый кассовый QR-код.
   */
  'register_cashbox_qrcode_sbp__apiVersion__cashbox_qr_code_post'(
    parameters?: Parameters<Paths.RegisterCashboxQrcodeSbpApiVersionCashboxQrCodePost.PathParameters> | null,
    data?: Paths.RegisterCashboxQrcodeSbpApiVersionCashboxQrCodePost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RegisterCashboxQrcodeSbpApiVersionCashboxQrCodePost.Responses.$200>
  /**
   * get_cashbox_qrcode_list_sbp__apiVersion__cashbox_qr_code_merchant__merchantId___accountId__get - Get Cashbox Qrcode List
   * 
   * Метод для получения списка кассовых QR-кодов
   */
  'get_cashbox_qrcode_list_sbp__apiVersion__cashbox_qr_code_merchant__merchantId___accountId__get'(
    parameters?: Parameters<Paths.GetCashboxQrcodeListSbpApiVersionCashboxQrCodeMerchantMerchantIdAccountIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCashboxQrcodeListSbpApiVersionCashboxQrCodeMerchantMerchantIdAccountIdGet.Responses.$200>
  /**
   * get_cashbox_qrcode_sbp__apiVersion__cashbox_qr_code__qrcId__post - Get Cashbox Qrcode
   * 
   * Метод для получения информации о кассовом QR-коде
   */
  'get_cashbox_qrcode_sbp__apiVersion__cashbox_qr_code__qrcId__post'(
    parameters?: Parameters<Paths.GetCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdPost.PathParameters> | null,
    data?: Paths.GetCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdPost.Responses.$200>
  /**
   * change_cashbox_qrcode_account_sbp__apiVersion__cashbox_qr_code__qrcId__account_post - Change Cashbox Qrcode Account
   * 
   * Метод для смены счёта зачисления кассового QR-кода
   */
  'change_cashbox_qrcode_account_sbp__apiVersion__cashbox_qr_code__qrcId__account_post'(
    parameters?: Parameters<Paths.ChangeCashboxQrcodeAccountSbpApiVersionCashboxQrCodeQrcIdAccountPost.PathParameters> | null,
    data?: Paths.ChangeCashboxQrcodeAccountSbpApiVersionCashboxQrCodeQrcIdAccountPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ChangeCashboxQrcodeAccountSbpApiVersionCashboxQrCodeQrcIdAccountPost.Responses.$200>
  /**
   * activate_cashbox_qrcode_sbp__apiVersion__cashbox_qr_code__qrcId__activate_post - Activate Cashbox Qrcode
   * 
   * Метод для активации кассового QR-кода
   */
  'activate_cashbox_qrcode_sbp__apiVersion__cashbox_qr_code__qrcId__activate_post'(
    parameters?: Parameters<Paths.ActivateCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdActivatePost.PathParameters> | null,
    data?: Paths.ActivateCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdActivatePost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ActivateCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdActivatePost.Responses.$200>
  /**
   * deactivate_cashbox_qrcode_sbp__apiVersion__cashbox_qr_code__qrcId__deactivate_post - Deactivate Cashbox Qrcode
   * 
   * Метод для деактивации кассового QR-кода
   */
  'deactivate_cashbox_qrcode_sbp__apiVersion__cashbox_qr_code__qrcId__deactivate_post'(
    parameters?: Parameters<Paths.DeactivateCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdDeactivatePost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeactivateCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdDeactivatePost.Responses.$200>
  /**
   * get_cashbox_qrcode_operation_info_sbp__apiVersion__cashbox_qr_code__qrcId__operation_get - Get Cashbox Qrcode Operation Info
   * 
   * Метод для получения статуса кассового QR-кода.
   */
  'get_cashbox_qrcode_operation_info_sbp__apiVersion__cashbox_qr_code__qrcId__operation_get'(
    parameters?: Parameters<Paths.GetCashboxQrcodeOperationInfoSbpApiVersionCashboxQrCodeQrcIdOperationGet.QueryParameters & Paths.GetCashboxQrcodeOperationInfoSbpApiVersionCashboxQrCodeQrcIdOperationGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCashboxQrcodeOperationInfoSbpApiVersionCashboxQrCodeQrcIdOperationGet.Responses.$200>
  /**
   * get_cashbox_qrcode_status_sbp__apiVersion__cashbox_qr_code__qrcId__status_get - Get Cashbox Qrcode Status
   * 
   * Метод для получения статуса кассового QR-кода.
   */
  'get_cashbox_qrcode_status_sbp__apiVersion__cashbox_qr_code__qrcId__status_get'(
    parameters?: Parameters<Paths.GetCashboxQrcodeStatusSbpApiVersionCashboxQrCodeQrcIdStatusGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCashboxQrcodeStatusSbpApiVersionCashboxQrCodeQrcIdStatusGet.Responses.$200>
  /**
   * get_customer_info_sbp__apiVersion__customer__customerCode___bankCode__get - Get Customer Info
   * 
   * Метод для получения информации о клиенте в Системе быстрых платежей
   * 
   */
  'get_customer_info_sbp__apiVersion__customer__customerCode___bankCode__get'(
    parameters?: Parameters<Paths.GetCustomerInfoSbpApiVersionCustomerCustomerCodeBankCodeGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomerInfoSbpApiVersionCustomerCustomerCodeBankCodeGet.Responses.$200>
  /**
   * get_payments_sbp__apiVersion__get_sbp_payments_get - Get Payments
   * 
   * Метод для получения списка платежей в Системе быстрых платежей
   * 
   * Обратите внимание: при поиске платежей за прошедшие дни обязательно передавать атрибут `fromDate` с указанием начальной даты периода. Если этот атрибут не передать, поиск выдаст результаты только за вчерашний и сегодняшний дни.
   */
  'get_payments_sbp__apiVersion__get_sbp_payments_get'(
    parameters?: Parameters<Paths.GetPaymentsSbpApiVersionGetSbpPaymentsGet.QueryParameters & Paths.GetPaymentsSbpApiVersionGetSbpPaymentsGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPaymentsSbpApiVersionGetSbpPaymentsGet.Responses.$200>
  /**
   * get_legal_entity_sbp__apiVersion__legal_entity__legalId__get - Get Legal Entity
   * 
   * Метод для получения данных юрлица в Системе быстрых платежей
   * 
   */
  'get_legal_entity_sbp__apiVersion__legal_entity__legalId__get'(
    parameters?: Parameters<Paths.GetLegalEntitySbpApiVersionLegalEntityLegalIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLegalEntitySbpApiVersionLegalEntityLegalIdGet.Responses.$200>
  /**
   * set_legal_entity_status_sbp__apiVersion__legal_entity__legalId__post - Set Legal Entity Status
   * 
   * Метод устанавливает статус юрлица в Системе быстрых платежей
   * 
   */
  'set_legal_entity_status_sbp__apiVersion__legal_entity__legalId__post'(
    parameters?: Parameters<Paths.SetLegalEntityStatusSbpApiVersionLegalEntityLegalIdPost.PathParameters> | null,
    data?: Paths.SetLegalEntityStatusSbpApiVersionLegalEntityLegalIdPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SetLegalEntityStatusSbpApiVersionLegalEntityLegalIdPost.Responses.$200>
  /**
   * get_merchants_list_sbp__apiVersion__merchant_legal_entity__legalId__get - Get Merchants List
   * 
   * Метод для получения списка ТСП юрлица
   * 
   */
  'get_merchants_list_sbp__apiVersion__merchant_legal_entity__legalId__get'(
    parameters?: Parameters<Paths.GetMerchantsListSbpApiVersionMerchantLegalEntityLegalIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMerchantsListSbpApiVersionMerchantLegalEntityLegalIdGet.Responses.$200>
  /**
   * register_merchant_sbp__apiVersion__merchant_legal_entity__legalId__post - Register Merchant
   * 
   * Метод для регистрации ТСП в Системе быстрых платежей
   * 
   */
  'register_merchant_sbp__apiVersion__merchant_legal_entity__legalId__post'(
    parameters?: Parameters<Paths.RegisterMerchantSbpApiVersionMerchantLegalEntityLegalIdPost.PathParameters> | null,
    data?: Paths.RegisterMerchantSbpApiVersionMerchantLegalEntityLegalIdPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RegisterMerchantSbpApiVersionMerchantLegalEntityLegalIdPost.Responses.$200>
  /**
   * get_merchant_sbp__apiVersion__merchant__merchantId__get - Get Merchant
   * 
   * Метод для получения информации о ТСП
   * 
   */
  'get_merchant_sbp__apiVersion__merchant__merchantId__get'(
    parameters?: Parameters<Paths.GetMerchantSbpApiVersionMerchantMerchantIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMerchantSbpApiVersionMerchantMerchantIdGet.Responses.$200>
  /**
   * set_merchant_status_sbp__apiVersion__merchant__merchantId__put - Set Merchant Status
   * 
   * Метод устанавливает статус ТСП
   * 
   */
  'set_merchant_status_sbp__apiVersion__merchant__merchantId__put'(
    parameters?: Parameters<Paths.SetMerchantStatusSbpApiVersionMerchantMerchantIdPut.PathParameters> | null,
    data?: Paths.SetMerchantStatusSbpApiVersionMerchantMerchantIdPut.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SetMerchantStatusSbpApiVersionMerchantMerchantIdPut.Responses.$200>
  /**
   * get_qr_codes_list_sbp__apiVersion__qr_code_legal_entity__legalId__get - Get Qr Codes List
   * 
   * Метод для получения списка QR-кодов
   * 
   */
  'get_qr_codes_list_sbp__apiVersion__qr_code_legal_entity__legalId__get'(
    parameters?: Parameters<Paths.GetQrCodesListSbpApiVersionQrCodeLegalEntityLegalIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetQrCodesListSbpApiVersionQrCodeLegalEntityLegalIdGet.Responses.$200>
  /**
   * register_qr_code_sbp__apiVersion__qr_code_merchant__merchantId___accountId__post - Register Qr Code
   * 
   * Метод для регистрации статического или динамического QR-кода в Системе быстрых платежей
   * 
   */
  'register_qr_code_sbp__apiVersion__qr_code_merchant__merchantId___accountId__post'(
    parameters?: Parameters<Paths.RegisterQrCodeSbpApiVersionQrCodeMerchantMerchantIdAccountIdPost.PathParameters> | null,
    data?: Paths.RegisterQrCodeSbpApiVersionQrCodeMerchantMerchantIdAccountIdPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RegisterQrCodeSbpApiVersionQrCodeMerchantMerchantIdAccountIdPost.Responses.$200>
  /**
   * get_qr_code_sbp__apiVersion__qr_code__qrcId__get - Get Qr Code
   * 
   * Метод для получения информации о QR-коде
   * 
   */
  'get_qr_code_sbp__apiVersion__qr_code__qrcId__get'(
    parameters?: Parameters<Paths.GetQrCodeSbpApiVersionQrCodeQrcIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetQrCodeSbpApiVersionQrCodeQrcIdGet.Responses.$200>
  /**
   * get_qr_codes_payment_status_sbp__apiVersion__qr_codes__qrc_ids__payment_status_get - Get Qr Codes Payment Status
   * 
   * Метод для получения статусов операций по динамическим QR-кодам
   */
  'get_qr_codes_payment_status_sbp__apiVersion__qr_codes__qrc_ids__payment_status_get'(
    parameters?: Parameters<Paths.GetQrCodesPaymentStatusSbpApiVersionQrCodesQrcIdsPaymentStatusGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetQrCodesPaymentStatusSbpApiVersionQrCodesQrcIdsPaymentStatusGet.Responses.$200>
  /**
   * start_refund_sbp__apiVersion__refund_post - Start Refund
   * 
   * Метод запрашивает возврат платежа через Систему быстрых платежей
   * 
   * Если нужно вернуть деньги нерезиденту, назначение платежа должно начинаться с _«{VO99020} Возврат ошибочно полученной суммы transactionId»,_ где `transactionId` — это идентификатор оригинальной операции.
   * 
   */
  'start_refund_sbp__apiVersion__refund_post'(
    parameters?: Parameters<Paths.StartRefundSbpApiVersionRefundPost.PathParameters> | null,
    data?: Paths.StartRefundSbpApiVersionRefundPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.StartRefundSbpApiVersionRefundPost.Responses.$200>
  /**
   * get_refund_data_sbp__apiVersion__refund__request_id__get - Get Refund Data
   * 
   * Метод для получения информация о платеже-возврате по Системе быстрых платежей
   * 
   */
  'get_refund_data_sbp__apiVersion__refund__request_id__get'(
    parameters?: Parameters<Paths.GetRefundDataSbpApiVersionRefundRequestIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetRefundDataSbpApiVersionRefundRequestIdGet.Responses.$200>
  /**
   * register_legal_entity_sbp__apiVersion__register_sbp_legal_entity_post - Register Legal Entity
   * 
   * Метод для регистрации юрлица в Системе быстрых платежей
   * 
   */
  'register_legal_entity_sbp__apiVersion__register_sbp_legal_entity_post'(
    parameters?: Parameters<Paths.RegisterLegalEntitySbpApiVersionRegisterSbpLegalEntityPost.PathParameters> | null,
    data?: Paths.RegisterLegalEntitySbpApiVersionRegisterSbpLegalEntityPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RegisterLegalEntitySbpApiVersionRegisterSbpLegalEntityPost.Responses.$200>
  /**
   * get_webhooks_webhook__apiVersion___client_id__get - Get Webhooks
   * 
   * Метод для получения списка вебхуков приложения
   * 
   */
  'get_webhooks_webhook__apiVersion___client_id__get'(
    parameters?: Parameters<Paths.GetWebhooksWebhookApiVersionClientIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWebhooksWebhookApiVersionClientIdGet.Responses.$200>
  /**
   * create_webhook_webhook__apiVersion___client_id__put - Create Webhook
   * 
   * Метод для создания вебхуков
   * 
   */
  'create_webhook_webhook__apiVersion___client_id__put'(
    parameters?: Parameters<Paths.CreateWebhookWebhookApiVersionClientIdPut.PathParameters> | null,
    data?: Paths.CreateWebhookWebhookApiVersionClientIdPut.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateWebhookWebhookApiVersionClientIdPut.Responses.$200>
  /**
   * edit_webhook_webhook__apiVersion___client_id__post - Edit Webhook
   * 
   * Метод для изменения _URL_ и типа вебхука
   */
  'edit_webhook_webhook__apiVersion___client_id__post'(
    parameters?: Parameters<Paths.EditWebhookWebhookApiVersionClientIdPost.PathParameters> | null,
    data?: Paths.EditWebhookWebhookApiVersionClientIdPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EditWebhookWebhookApiVersionClientIdPost.Responses.$200>
  /**
   * delete_webhook_webhook__apiVersion___client_id__delete - Delete Webhook
   * 
   * Метод для удаления вебхука
   * 
   */
  'delete_webhook_webhook__apiVersion___client_id__delete'(
    parameters?: Parameters<Paths.DeleteWebhookWebhookApiVersionClientIdDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteWebhookWebhookApiVersionClientIdDelete.Responses.$200>
  /**
   * send_webhook_webhook__apiVersion___client_id__test_send_post - Send Webhook
   * 
   * Метод для проверки отправки вебхука
   */
  'send_webhook_webhook__apiVersion___client_id__test_send_post'(
    parameters?: Parameters<Paths.SendWebhookWebhookApiVersionClientIdTestSendPost.PathParameters> | null,
    data?: Paths.SendWebhookWebhookApiVersionClientIdTestSendPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendWebhookWebhookApiVersionClientIdTestSendPost.Responses.$200>
}

export interface PathsDictionary {
  ['/acquiring/{apiVersion}/payments']: {
    /**
     * get_payment_operation_list_acquiring__apiVersion__payments_get - Get Payment Operation List
     * 
     * Метод для получения списка операций
     * 
     * - _CREATED_ - Операция создана
     * - _APPROVED_ - Операция одобрена (оплата прошла успешно)
     * - _ON-REFUND_ - Операция заблокирована на время выполнения возврата
     * - _REFUNDED_ - Осуществлен возврат
     * - _EXPIRED_ - Истек срок действия
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetPaymentOperationListAcquiringApiVersionPaymentsGet.QueryParameters & Paths.GetPaymentOperationListAcquiringApiVersionPaymentsGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPaymentOperationListAcquiringApiVersionPaymentsGet.Responses.$200>
    /**
     * create_payment_operation_acquiring__apiVersion__payments_post - Create Payment Operation
     * 
     * Метод для создания ссылки на оплату
     */
    'post'(
      parameters?: Parameters<Paths.CreatePaymentOperationAcquiringApiVersionPaymentsPost.PathParameters> | null,
      data?: Paths.CreatePaymentOperationAcquiringApiVersionPaymentsPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreatePaymentOperationAcquiringApiVersionPaymentsPost.Responses.$200>
  }
  ['/acquiring/{apiVersion}/payments/{operationId}']: {
    /**
     * get_payment_operation_info_acquiring__apiVersion__payments__operationId__get - Get Payment Operation Info
     * 
     * Метод для получения информации о конкретной операции
     * 
     * - _CREATED_ - Операция создана
     * - _APPROVED_ - Операция одобрена (оплата прошла успешно)
     * - _ON-REFUND_ - Операция заблокирована на время выполнения возврата
     * - _REFUNDED_ - Осуществлен возврат
     * - _EXPIRED_ - Истек срок действия
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetPaymentOperationInfoAcquiringApiVersionPaymentsOperationIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPaymentOperationInfoAcquiringApiVersionPaymentsOperationIdGet.Responses.$200>
  }
  ['/acquiring/{apiVersion}/payments/{operationId}/refund']: {
    /**
     * refund_payment_operation_acquiring__apiVersion__payments__operationId__refund_post - Refund Payment Operation
     * 
     * Метод для возврата платежа по карте  
     * Возврат возможен только для платежа со статусом _APPROVED_
     */
    'post'(
      parameters?: Parameters<Paths.RefundPaymentOperationAcquiringApiVersionPaymentsOperationIdRefundPost.PathParameters> | null,
      data?: Paths.RefundPaymentOperationAcquiringApiVersionPaymentsOperationIdRefundPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RefundPaymentOperationAcquiringApiVersionPaymentsOperationIdRefundPost.Responses.$200>
  }
  ['/acquiring/{apiVersion}/payments_with_receipt']: {
    /**
     * create_payment_operation_with_receipt_acquiring__apiVersion__payments_with_receipt_post - Create Payment Operation With Receipt
     * 
     * Метод для создания ссылки на оплату и отправки чека
     */
    'post'(
      parameters?: Parameters<Paths.CreatePaymentOperationWithReceiptAcquiringApiVersionPaymentsWithReceiptPost.PathParameters> | null,
      data?: Paths.CreatePaymentOperationWithReceiptAcquiringApiVersionPaymentsWithReceiptPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreatePaymentOperationWithReceiptAcquiringApiVersionPaymentsWithReceiptPost.Responses.$200>
  }
  ['/acquiring/{apiVersion}/retailers']: {
    /**
     * get_retailers_acquiring__apiVersion__retailers_get - Get Retailers
     * 
     * Метод для получения информации о ретейлере
     * 
     * - _NEW_ - Ретейлер создан
     * - _ADDRESS_DADATA_ - Адрес уточнен
     * - _OPEN_ACCOUNT_ - Счёт открыт
     * - _TWPG_SENDED_ - Данные мерчанта и терминала отправлены в процессинг
     * - _RETAILER_CREATED_ - Мерчант создан в процессинге
     * - _TERMINAL_CREATED_ - Терминал создан в процессинге
     * - _FILE_SENT_ - файл отправлен в НСПК
     * - _REG_ - Зарегистрирован
     * - _CLOSE_ - Закрыт
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetRetailersAcquiringApiVersionRetailersGet.QueryParameters & Paths.GetRetailersAcquiringApiVersionRetailersGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetRetailersAcquiringApiVersionRetailersGet.Responses.$200>
  }
  ['/consent/{apiVersion}/consents']: {
    /**
     * get_all_consents_list_consent__apiVersion__consents_get - Get All Consents List
     * 
     * Метод для получения списка разрешений
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetAllConsentsListConsentApiVersionConsentsGet.HeaderParameters & Paths.GetAllConsentsListConsentApiVersionConsentsGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAllConsentsListConsentApiVersionConsentsGet.Responses.$200>
    /**
     * create_new_consent_consent__apiVersion__consents_post - Create New Consent
     * 
     * Метод для создания разрешения
     * 
     */
    'post'(
      parameters?: Parameters<Paths.CreateNewConsentConsentApiVersionConsentsPost.PathParameters> | null,
      data?: Paths.CreateNewConsentConsentApiVersionConsentsPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateNewConsentConsentApiVersionConsentsPost.Responses.$200>
  }
  ['/consent/{apiVersion}/consents/{consentId}/child']: {
    /**
     * get_all_child_consents_consent__apiVersion__consents__consentId__child_get - Get All Child Consents
     * 
     * Метод для получения всех дочерних разрешений
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetAllChildConsentsConsentApiVersionConsentsConsentIdChildGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAllChildConsentsConsentApiVersionConsentsConsentIdChildGet.Responses.$200>
  }
  ['/consent/{apiVersion}/{consentId}']: {
    /**
     * get_consent_info_consent__apiVersion___consentId__get - Get Consent Info
     * 
     * Метод для получения информации о списке разрешений
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetConsentInfoConsentApiVersionConsentIdGet.HeaderParameters & Paths.GetConsentInfoConsentApiVersionConsentIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetConsentInfoConsentApiVersionConsentIdGet.Responses.$200>
  }
  ['/invoice/{apiVersion}/bills']: {
    /**
     * create_invoice_invoice__apiVersion__bills_post - Create Invoice
     * 
     * Метод создания счета на оплату
     */
    'post'(
      parameters?: Parameters<Paths.CreateInvoiceInvoiceApiVersionBillsPost.PathParameters> | null,
      data?: Paths.CreateInvoiceInvoiceApiVersionBillsPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateInvoiceInvoiceApiVersionBillsPost.Responses.$200>
  }
  ['/invoice/{apiVersion}/bills/{customerCode}/{documentId}']: {
    /**
     * delete_invoice_invoice__apiVersion__bills__customerCode___documentId__delete - Delete Invoice
     * 
     * Метод для удаления счета на оплату
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteInvoiceInvoiceApiVersionBillsCustomerCodeDocumentIdDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteInvoiceInvoiceApiVersionBillsCustomerCodeDocumentIdDelete.Responses.$200>
  }
  ['/invoice/{apiVersion}/bills/{customerCode}/{documentId}/email']: {
    /**
     * send_invoice_to_email_invoice__apiVersion__bills__customerCode___documentId__email_post - Send Invoice To Email
     * 
     * Метод отправки счета на оплату на почту
     */
    'post'(
      parameters?: Parameters<Paths.SendInvoiceToEmailInvoiceApiVersionBillsCustomerCodeDocumentIdEmailPost.PathParameters> | null,
      data?: Paths.SendInvoiceToEmailInvoiceApiVersionBillsCustomerCodeDocumentIdEmailPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendInvoiceToEmailInvoiceApiVersionBillsCustomerCodeDocumentIdEmailPost.Responses.$200>
  }
  ['/invoice/{apiVersion}/bills/{customerCode}/{documentId}/file']: {
    /**
     * get_invoice_invoice__apiVersion__bills__customerCode___documentId__file_get - Get Invoice
     * 
     * Метод получения файла выставленного счета
     */
    'get'(
      parameters?: Parameters<Paths.GetInvoiceInvoiceApiVersionBillsCustomerCodeDocumentIdFileGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInvoiceInvoiceApiVersionBillsCustomerCodeDocumentIdFileGet.Responses.$200>
  }
  ['/invoice/{apiVersion}/bills/{customerCode}/{documentId}/payment-status']: {
    /**
     * get_invoice_payment_status_invoice__apiVersion__bills__customerCode___documentId__payment_status_get - Get Invoice Payment Status
     * 
     * Метод получения статуса счета
     */
    'get'(
      parameters?: Parameters<Paths.GetInvoicePaymentStatusInvoiceApiVersionBillsCustomerCodeDocumentIdPaymentStatusGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInvoicePaymentStatusInvoiceApiVersionBillsCustomerCodeDocumentIdPaymentStatusGet.Responses.$200>
  }
  ['/invoice/{apiVersion}/closing-documents']: {
    /**
     * create_closing_document_invoice__apiVersion__closing_documents_post - Create Closing Document
     * 
     * Метод создания закрывающего документа
     */
    'post'(
      parameters?: Parameters<Paths.CreateClosingDocumentInvoiceApiVersionClosingDocumentsPost.PathParameters> | null,
      data?: Paths.CreateClosingDocumentInvoiceApiVersionClosingDocumentsPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateClosingDocumentInvoiceApiVersionClosingDocumentsPost.Responses.$200>
  }
  ['/invoice/{apiVersion}/closing-documents/{customerCode}/{documentId}']: {
    /**
     * delete_closing_documents_invoice__apiVersion__closing_documents__customerCode___documentId__delete - Delete Closing Documents
     * 
     * Метод для удаления закрывающего документа
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteClosingDocumentsInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteClosingDocumentsInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdDelete.Responses.$200>
  }
  ['/invoice/{apiVersion}/closing-documents/{customerCode}/{documentId}/email']: {
    /**
     * send_closing_documents_to_email_invoice__apiVersion__closing_documents__customerCode___documentId__email_post - Send Closing Documents To Email
     * 
     * Метод отправки закрывающего документа на почту
     */
    'post'(
      parameters?: Parameters<Paths.SendClosingDocumentsToEmailInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdEmailPost.PathParameters> | null,
      data?: Paths.SendClosingDocumentsToEmailInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdEmailPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendClosingDocumentsToEmailInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdEmailPost.Responses.$200>
  }
  ['/invoice/{apiVersion}/closing-documents/{customerCode}/{documentId}/file']: {
    /**
     * get_closing_document_invoice__apiVersion__closing_documents__customerCode___documentId__file_get - Get Closing Document
     * 
     * Метод получения файла закрывающего документа
     */
    'get'(
      parameters?: Parameters<Paths.GetClosingDocumentInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdFileGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetClosingDocumentInvoiceApiVersionClosingDocumentsCustomerCodeDocumentIdFileGet.Responses.$200>
  }
  ['/open-banking/{apiVersion}/accounts']: {
    /**
     * get_accounts_list_open_banking__apiVersion__accounts_get - Get Accounts List
     * 
     * Метод для получения списка доступных счетов
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetAccountsListOpenBankingApiVersionAccountsGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAccountsListOpenBankingApiVersionAccountsGet.Responses.$200>
  }
  ['/open-banking/{apiVersion}/accounts/{accountId}']: {
    /**
     * get_account_info_open_banking__apiVersion__accounts__accountId__get - Get Account Info
     * 
     * Метод для получения информации по конкретному счёту
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetAccountInfoOpenBankingApiVersionAccountsAccountIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAccountInfoOpenBankingApiVersionAccountsAccountIdGet.Responses.$200>
  }
  ['/open-banking/{apiVersion}/accounts/{accountId}/authorized-card-transactions']: {
    /**
     * get_authorized_card_transactions_open_banking__apiVersion__accounts__accountId__authorized_card_transactions_get - Get Authorized Card Transactions
     * 
     * Метод получения авторизованных карточных транзакций конкретного счета
     */
    'get'(
      parameters?: Parameters<Paths.GetAuthorizedCardTransactionsOpenBankingApiVersionAccountsAccountIdAuthorizedCardTransactionsGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAuthorizedCardTransactionsOpenBankingApiVersionAccountsAccountIdAuthorizedCardTransactionsGet.Responses.$200>
  }
  ['/open-banking/{apiVersion}/accounts/{accountId}/balances']: {
    /**
     * get_balance_info_open_banking__apiVersion__accounts__accountId__balances_get - Get Balance Info
     * 
     * Метод для получения информации о балансе конкретного счёта
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetBalanceInfoOpenBankingApiVersionAccountsAccountIdBalancesGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBalanceInfoOpenBankingApiVersionAccountsAccountIdBalancesGet.Responses.$200>
  }
  ['/open-banking/{apiVersion}/accounts/{accountId}/statements/{statementId}']: {
    /**
     * get_statement_open_banking__apiVersion__accounts__accountId__statements__statementId__get - Get Statement
     * 
     * Метод для получения конкретной выписки  
     * 
     * После вызова метода `Init Statement` с помощью `statementId` можно отследить, на каком этапе создание определённой выписки.  
     * 
     * Есть три статуса:
     * - _Created_ — создан запрос на выписку;  
     * - _Processing_ — запрос в обработке;  
     * - _Ready_ — выписка готова.
     * 
     * **Особенности:**  
     * Метод _Init Statement_ отрабатывает асинхронно. Отражаются только операции, находящиеся в финальном статусе — _Ready_.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetStatementOpenBankingApiVersionAccountsAccountIdStatementsStatementIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetStatementOpenBankingApiVersionAccountsAccountIdStatementsStatementIdGet.Responses.$200>
  }
  ['/open-banking/{apiVersion}/balances']: {
    /**
     * get_balances_list_open_banking__apiVersion__balances_get - Get Balances List
     * 
     * Метод для получения баланса по нескольким счетам
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetBalancesListOpenBankingApiVersionBalancesGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBalancesListOpenBankingApiVersionBalancesGet.Responses.$200>
  }
  ['/open-banking/{apiVersion}/customers']: {
    /**
     * get_customers_list_open_banking__apiVersion__customers_get - Get Customers List
     * 
     * Метод для получения списка доступных клиентов
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomersListOpenBankingApiVersionCustomersGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomersListOpenBankingApiVersionCustomersGet.Responses.$200>
  }
  ['/open-banking/{apiVersion}/customers/{customerCode}']: {
    /**
     * get_customer_info_open_banking__apiVersion__customers__customerCode__get - Get Customer Info
     * 
     * Метод для получения информации по конкретному клиенту
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomerInfoOpenBankingApiVersionCustomersCustomerCodeGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomerInfoOpenBankingApiVersionCustomersCustomerCodeGet.Responses.$200>
  }
  ['/open-banking/{apiVersion}/statements']: {
    /**
     * get_statements_list_open_banking__apiVersion__statements_get - Get Statements List
     * 
     * Метод для получения списка доступных выписок  
     * 
     * После вызова метода `Init Statement` можно отследить, в каком статусе готовящаяся выписка:  
     * - _Created_ — только создан запрос на выписку;
     * - _Processing_ — запрос в обработке;
     * - _Ready_ — выписка готова.
     * 
     * **Особенности:**  
     * Отражаются только операции, находящиеся в финальном статусе — _Ready_.
     */
    'get'(
      parameters?: Parameters<Paths.GetStatementsListOpenBankingApiVersionStatementsGet.QueryParameters & Paths.GetStatementsListOpenBankingApiVersionStatementsGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetStatementsListOpenBankingApiVersionStatementsGet.Responses.$200>
    /**
     * init_statement_open_banking__apiVersion__statements_post - Init Statement
     * 
     * Метод для создания выписки по конкретному счёту
     * 
     */
    'post'(
      parameters?: Parameters<Paths.InitStatementOpenBankingApiVersionStatementsPost.PathParameters> | null,
      data?: Paths.InitStatementOpenBankingApiVersionStatementsPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.InitStatementOpenBankingApiVersionStatementsPost.Responses.$200>
  }
  ['/payment/{apiVersion}/for-sign']: {
    /**
     * create_payment_for_sign_payment__apiVersion__for_sign_post - Create Payment For Sign
     * 
     * Метод для создания платежа.  
     * 
     * Если вы создаёте платёж за третье лицо в бюджет, заполните поля `payerINN` и `payerKPP`.
     * 
     * **Обратите внимание:**  
     * _paymentDate_ нужно заполнить по часовому поясу Москвы.
     * 
     */
    'post'(
      parameters?: Parameters<Paths.CreatePaymentForSignPaymentApiVersionForSignPost.PathParameters> | null,
      data?: Paths.CreatePaymentForSignPaymentApiVersionForSignPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreatePaymentForSignPaymentApiVersionForSignPost.Responses.$200>
  }
  ['/payment/{apiVersion}/order']: {
    /**
     * create_payment_payment__apiVersion__order_post - Create Payment
     * 
     * Метод для создания и подписания платежа.  
     * 
     * - Если вы создаёте платеж в бюджет, то необходимо заполнить поле `payerKPP`
     * - Если вы создаёте платёж _за третье лицо в бюджет_, заполните поля `payerINN` и `payerKPP`.
     * 
     * **Обратите внимание:**  
     * _paymentDate_ нужно заполнить по часовому поясу Москвы.
     * 
     */
    'post'(
      parameters?: Parameters<Paths.CreatePaymentPaymentApiVersionOrderPost.PathParameters> | null,
      data?: Paths.CreatePaymentPaymentApiVersionOrderPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreatePaymentPaymentApiVersionOrderPost.Responses.$200>
  }
  ['/payment/{apiVersion}/status/{requestId}']: {
    /**
     * get_payment_status_payment__apiVersion__status__requestId__get - Get Payment Status
     * 
     * Метод для получения статуса платежа
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetPaymentStatusPaymentApiVersionStatusRequestIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPaymentStatusPaymentApiVersionStatusRequestIdGet.Responses.$200>
  }
  ['/sbp/{apiVersion}/account/{legalId}']: {
    /**
     * get_accounts_list_sbp__apiVersion__account__legalId__get - Get Accounts List
     * 
     * Метод для получения списка счетов юрлица в Системе быстрых платежей
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetAccountsListSbpApiVersionAccountLegalIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAccountsListSbpApiVersionAccountLegalIdGet.Responses.$200>
  }
  ['/sbp/{apiVersion}/cashbox-qr-code']: {
    /**
     * register_cashbox_qrcode_sbp__apiVersion__cashbox_qr_code_post - Register Cashbox Qrcode
     * 
     * Регистрирует новый кассовый QR-код.
     */
    'post'(
      parameters?: Parameters<Paths.RegisterCashboxQrcodeSbpApiVersionCashboxQrCodePost.PathParameters> | null,
      data?: Paths.RegisterCashboxQrcodeSbpApiVersionCashboxQrCodePost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RegisterCashboxQrcodeSbpApiVersionCashboxQrCodePost.Responses.$200>
  }
  ['/sbp/{apiVersion}/cashbox-qr-code/merchant/{merchantId}/{accountId}']: {
    /**
     * get_cashbox_qrcode_list_sbp__apiVersion__cashbox_qr_code_merchant__merchantId___accountId__get - Get Cashbox Qrcode List
     * 
     * Метод для получения списка кассовых QR-кодов
     */
    'get'(
      parameters?: Parameters<Paths.GetCashboxQrcodeListSbpApiVersionCashboxQrCodeMerchantMerchantIdAccountIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCashboxQrcodeListSbpApiVersionCashboxQrCodeMerchantMerchantIdAccountIdGet.Responses.$200>
  }
  ['/sbp/{apiVersion}/cashbox-qr-code/{qrcId}']: {
    /**
     * get_cashbox_qrcode_sbp__apiVersion__cashbox_qr_code__qrcId__post - Get Cashbox Qrcode
     * 
     * Метод для получения информации о кассовом QR-коде
     */
    'post'(
      parameters?: Parameters<Paths.GetCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdPost.PathParameters> | null,
      data?: Paths.GetCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdPost.Responses.$200>
  }
  ['/sbp/{apiVersion}/cashbox-qr-code/{qrcId}/account']: {
    /**
     * change_cashbox_qrcode_account_sbp__apiVersion__cashbox_qr_code__qrcId__account_post - Change Cashbox Qrcode Account
     * 
     * Метод для смены счёта зачисления кассового QR-кода
     */
    'post'(
      parameters?: Parameters<Paths.ChangeCashboxQrcodeAccountSbpApiVersionCashboxQrCodeQrcIdAccountPost.PathParameters> | null,
      data?: Paths.ChangeCashboxQrcodeAccountSbpApiVersionCashboxQrCodeQrcIdAccountPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ChangeCashboxQrcodeAccountSbpApiVersionCashboxQrCodeQrcIdAccountPost.Responses.$200>
  }
  ['/sbp/{apiVersion}/cashbox-qr-code/{qrcId}/activate']: {
    /**
     * activate_cashbox_qrcode_sbp__apiVersion__cashbox_qr_code__qrcId__activate_post - Activate Cashbox Qrcode
     * 
     * Метод для активации кассового QR-кода
     */
    'post'(
      parameters?: Parameters<Paths.ActivateCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdActivatePost.PathParameters> | null,
      data?: Paths.ActivateCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdActivatePost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ActivateCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdActivatePost.Responses.$200>
  }
  ['/sbp/{apiVersion}/cashbox-qr-code/{qrcId}/deactivate']: {
    /**
     * deactivate_cashbox_qrcode_sbp__apiVersion__cashbox_qr_code__qrcId__deactivate_post - Deactivate Cashbox Qrcode
     * 
     * Метод для деактивации кассового QR-кода
     */
    'post'(
      parameters?: Parameters<Paths.DeactivateCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdDeactivatePost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeactivateCashboxQrcodeSbpApiVersionCashboxQrCodeQrcIdDeactivatePost.Responses.$200>
  }
  ['/sbp/{apiVersion}/cashbox-qr-code/{qrcId}/operation']: {
    /**
     * get_cashbox_qrcode_operation_info_sbp__apiVersion__cashbox_qr_code__qrcId__operation_get - Get Cashbox Qrcode Operation Info
     * 
     * Метод для получения статуса кассового QR-кода.
     */
    'get'(
      parameters?: Parameters<Paths.GetCashboxQrcodeOperationInfoSbpApiVersionCashboxQrCodeQrcIdOperationGet.QueryParameters & Paths.GetCashboxQrcodeOperationInfoSbpApiVersionCashboxQrCodeQrcIdOperationGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCashboxQrcodeOperationInfoSbpApiVersionCashboxQrCodeQrcIdOperationGet.Responses.$200>
  }
  ['/sbp/{apiVersion}/cashbox-qr-code/{qrcId}/status']: {
    /**
     * get_cashbox_qrcode_status_sbp__apiVersion__cashbox_qr_code__qrcId__status_get - Get Cashbox Qrcode Status
     * 
     * Метод для получения статуса кассового QR-кода.
     */
    'get'(
      parameters?: Parameters<Paths.GetCashboxQrcodeStatusSbpApiVersionCashboxQrCodeQrcIdStatusGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCashboxQrcodeStatusSbpApiVersionCashboxQrCodeQrcIdStatusGet.Responses.$200>
  }
  ['/sbp/{apiVersion}/customer/{customerCode}/{bankCode}']: {
    /**
     * get_customer_info_sbp__apiVersion__customer__customerCode___bankCode__get - Get Customer Info
     * 
     * Метод для получения информации о клиенте в Системе быстрых платежей
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomerInfoSbpApiVersionCustomerCustomerCodeBankCodeGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomerInfoSbpApiVersionCustomerCustomerCodeBankCodeGet.Responses.$200>
  }
  ['/sbp/{apiVersion}/get-sbp-payments']: {
    /**
     * get_payments_sbp__apiVersion__get_sbp_payments_get - Get Payments
     * 
     * Метод для получения списка платежей в Системе быстрых платежей
     * 
     * Обратите внимание: при поиске платежей за прошедшие дни обязательно передавать атрибут `fromDate` с указанием начальной даты периода. Если этот атрибут не передать, поиск выдаст результаты только за вчерашний и сегодняшний дни.
     */
    'get'(
      parameters?: Parameters<Paths.GetPaymentsSbpApiVersionGetSbpPaymentsGet.QueryParameters & Paths.GetPaymentsSbpApiVersionGetSbpPaymentsGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPaymentsSbpApiVersionGetSbpPaymentsGet.Responses.$200>
  }
  ['/sbp/{apiVersion}/legal-entity/{legalId}']: {
    /**
     * get_legal_entity_sbp__apiVersion__legal_entity__legalId__get - Get Legal Entity
     * 
     * Метод для получения данных юрлица в Системе быстрых платежей
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetLegalEntitySbpApiVersionLegalEntityLegalIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLegalEntitySbpApiVersionLegalEntityLegalIdGet.Responses.$200>
    /**
     * set_legal_entity_status_sbp__apiVersion__legal_entity__legalId__post - Set Legal Entity Status
     * 
     * Метод устанавливает статус юрлица в Системе быстрых платежей
     * 
     */
    'post'(
      parameters?: Parameters<Paths.SetLegalEntityStatusSbpApiVersionLegalEntityLegalIdPost.PathParameters> | null,
      data?: Paths.SetLegalEntityStatusSbpApiVersionLegalEntityLegalIdPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SetLegalEntityStatusSbpApiVersionLegalEntityLegalIdPost.Responses.$200>
  }
  ['/sbp/{apiVersion}/merchant/legal-entity/{legalId}']: {
    /**
     * get_merchants_list_sbp__apiVersion__merchant_legal_entity__legalId__get - Get Merchants List
     * 
     * Метод для получения списка ТСП юрлица
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetMerchantsListSbpApiVersionMerchantLegalEntityLegalIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMerchantsListSbpApiVersionMerchantLegalEntityLegalIdGet.Responses.$200>
    /**
     * register_merchant_sbp__apiVersion__merchant_legal_entity__legalId__post - Register Merchant
     * 
     * Метод для регистрации ТСП в Системе быстрых платежей
     * 
     */
    'post'(
      parameters?: Parameters<Paths.RegisterMerchantSbpApiVersionMerchantLegalEntityLegalIdPost.PathParameters> | null,
      data?: Paths.RegisterMerchantSbpApiVersionMerchantLegalEntityLegalIdPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RegisterMerchantSbpApiVersionMerchantLegalEntityLegalIdPost.Responses.$200>
  }
  ['/sbp/{apiVersion}/merchant/{merchantId}']: {
    /**
     * get_merchant_sbp__apiVersion__merchant__merchantId__get - Get Merchant
     * 
     * Метод для получения информации о ТСП
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetMerchantSbpApiVersionMerchantMerchantIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMerchantSbpApiVersionMerchantMerchantIdGet.Responses.$200>
    /**
     * set_merchant_status_sbp__apiVersion__merchant__merchantId__put - Set Merchant Status
     * 
     * Метод устанавливает статус ТСП
     * 
     */
    'put'(
      parameters?: Parameters<Paths.SetMerchantStatusSbpApiVersionMerchantMerchantIdPut.PathParameters> | null,
      data?: Paths.SetMerchantStatusSbpApiVersionMerchantMerchantIdPut.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SetMerchantStatusSbpApiVersionMerchantMerchantIdPut.Responses.$200>
  }
  ['/sbp/{apiVersion}/qr-code/legal-entity/{legalId}']: {
    /**
     * get_qr_codes_list_sbp__apiVersion__qr_code_legal_entity__legalId__get - Get Qr Codes List
     * 
     * Метод для получения списка QR-кодов
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetQrCodesListSbpApiVersionQrCodeLegalEntityLegalIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetQrCodesListSbpApiVersionQrCodeLegalEntityLegalIdGet.Responses.$200>
  }
  ['/sbp/{apiVersion}/qr-code/merchant/{merchantId}/{accountId}']: {
    /**
     * register_qr_code_sbp__apiVersion__qr_code_merchant__merchantId___accountId__post - Register Qr Code
     * 
     * Метод для регистрации статического или динамического QR-кода в Системе быстрых платежей
     * 
     */
    'post'(
      parameters?: Parameters<Paths.RegisterQrCodeSbpApiVersionQrCodeMerchantMerchantIdAccountIdPost.PathParameters> | null,
      data?: Paths.RegisterQrCodeSbpApiVersionQrCodeMerchantMerchantIdAccountIdPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RegisterQrCodeSbpApiVersionQrCodeMerchantMerchantIdAccountIdPost.Responses.$200>
  }
  ['/sbp/{apiVersion}/qr-code/{qrcId}']: {
    /**
     * get_qr_code_sbp__apiVersion__qr_code__qrcId__get - Get Qr Code
     * 
     * Метод для получения информации о QR-коде
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetQrCodeSbpApiVersionQrCodeQrcIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetQrCodeSbpApiVersionQrCodeQrcIdGet.Responses.$200>
  }
  ['/sbp/{apiVersion}/qr-codes/{qrc_ids}/payment-status']: {
    /**
     * get_qr_codes_payment_status_sbp__apiVersion__qr_codes__qrc_ids__payment_status_get - Get Qr Codes Payment Status
     * 
     * Метод для получения статусов операций по динамическим QR-кодам
     */
    'get'(
      parameters?: Parameters<Paths.GetQrCodesPaymentStatusSbpApiVersionQrCodesQrcIdsPaymentStatusGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetQrCodesPaymentStatusSbpApiVersionQrCodesQrcIdsPaymentStatusGet.Responses.$200>
  }
  ['/sbp/{apiVersion}/refund']: {
    /**
     * start_refund_sbp__apiVersion__refund_post - Start Refund
     * 
     * Метод запрашивает возврат платежа через Систему быстрых платежей
     * 
     * Если нужно вернуть деньги нерезиденту, назначение платежа должно начинаться с _«{VO99020} Возврат ошибочно полученной суммы transactionId»,_ где `transactionId` — это идентификатор оригинальной операции.
     * 
     */
    'post'(
      parameters?: Parameters<Paths.StartRefundSbpApiVersionRefundPost.PathParameters> | null,
      data?: Paths.StartRefundSbpApiVersionRefundPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.StartRefundSbpApiVersionRefundPost.Responses.$200>
  }
  ['/sbp/{apiVersion}/refund/{request_id}']: {
    /**
     * get_refund_data_sbp__apiVersion__refund__request_id__get - Get Refund Data
     * 
     * Метод для получения информация о платеже-возврате по Системе быстрых платежей
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetRefundDataSbpApiVersionRefundRequestIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetRefundDataSbpApiVersionRefundRequestIdGet.Responses.$200>
  }
  ['/sbp/{apiVersion}/register-sbp-legal-entity']: {
    /**
     * register_legal_entity_sbp__apiVersion__register_sbp_legal_entity_post - Register Legal Entity
     * 
     * Метод для регистрации юрлица в Системе быстрых платежей
     * 
     */
    'post'(
      parameters?: Parameters<Paths.RegisterLegalEntitySbpApiVersionRegisterSbpLegalEntityPost.PathParameters> | null,
      data?: Paths.RegisterLegalEntitySbpApiVersionRegisterSbpLegalEntityPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RegisterLegalEntitySbpApiVersionRegisterSbpLegalEntityPost.Responses.$200>
  }
  ['/webhook/{apiVersion}/{client_id}']: {
    /**
     * get_webhooks_webhook__apiVersion___client_id__get - Get Webhooks
     * 
     * Метод для получения списка вебхуков приложения
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetWebhooksWebhookApiVersionClientIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWebhooksWebhookApiVersionClientIdGet.Responses.$200>
    /**
     * create_webhook_webhook__apiVersion___client_id__put - Create Webhook
     * 
     * Метод для создания вебхуков
     * 
     */
    'put'(
      parameters?: Parameters<Paths.CreateWebhookWebhookApiVersionClientIdPut.PathParameters> | null,
      data?: Paths.CreateWebhookWebhookApiVersionClientIdPut.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateWebhookWebhookApiVersionClientIdPut.Responses.$200>
    /**
     * edit_webhook_webhook__apiVersion___client_id__post - Edit Webhook
     * 
     * Метод для изменения _URL_ и типа вебхука
     */
    'post'(
      parameters?: Parameters<Paths.EditWebhookWebhookApiVersionClientIdPost.PathParameters> | null,
      data?: Paths.EditWebhookWebhookApiVersionClientIdPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EditWebhookWebhookApiVersionClientIdPost.Responses.$200>
    /**
     * delete_webhook_webhook__apiVersion___client_id__delete - Delete Webhook
     * 
     * Метод для удаления вебхука
     * 
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteWebhookWebhookApiVersionClientIdDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteWebhookWebhookApiVersionClientIdDelete.Responses.$200>
  }
  ['/webhook/{apiVersion}/{client_id}/test_send']: {
    /**
     * send_webhook_webhook__apiVersion___client_id__test_send_post - Send Webhook
     * 
     * Метод для проверки отправки вебхука
     */
    'post'(
      parameters?: Parameters<Paths.SendWebhookWebhookApiVersionClientIdTestSendPost.PathParameters> | null,
      data?: Paths.SendWebhookWebhookApiVersionClientIdTestSendPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendWebhookWebhookApiVersionClientIdTestSendPost.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

