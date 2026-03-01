module.exports = {
	extends: ["stylelint-config-standard-scss"],
	plugins: ["stylelint-order"],
	customSyntax: "postcss-scss",

	rules: {
		"order/order": [
			[
				"custom-properties",
				"dollar-variables",

				// 1️⃣ Спочатку звичайні властивості
				"declarations",

				// 2️⃣ Потім міксіни (брейкпоінти)
				{
					type: "at-rule",
					name: "include",
				},

				// 3️⃣ Потім вкладені селектори
				"rules",
			],
		],

		"order/properties-order": [
			// 1. Позиціонування
			"position",
			"z-index",
			"top",
			"right",
			"bottom",
			"left",

			// 2. Блочна модель
			"display",
			"flex",
			"flex-direction",
			"flex-wrap",
			"justify-content",
			"align-items",
			"grid",
			"grid-row",
			"grid-column",
			"width",
			"height",
			"margin",
			"padding",
			"box-sizing",

			// 3. Оформлення
			"border",
			"border-radius",
			"background",
			"background-color",
			"background-image",
			"background-repeat",
			"background-position",
			"background-size",
			"box-shadow",
			"overflow",
			"opacity",

			// 4. Типографіка
			"font",
			"font-size",
			"font-weight",
			"line-height",
			"text-align",
			"text-transform",
			"color",

			// 5. Анімація
			"transition",
			"transform",
			"cursor",
			"pointer-events",
		],
	},
};
