from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Updater, CommandHandler, CallbackQueryHandler, ConversationHandler, MessageHandler, Filters

# حالت‌های گفتگو (برای مدیریت بازی‌ها)
CHOOSING, PLAYING = range(2)

# تابع شروع
def start(update, context):
    keyboard = [
        [InlineKeyboardButton("شطرنج", callback_data='chess')],
        [InlineKeyboardButton("دوز (XO)", callback_data='xo')],
        [InlineKeyboardButton("سنگ‌کاغذ‌قیچی", callback_data='rps')],
        [InlineKeyboardButton("کارت حافظه", callback_data='memory')],
        [InlineKeyboardButton("منچ", callback_data='ludo')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    update.message.reply_text('به ربات بازی خوش آمدید! یک بازی انتخاب کنید:', reply_markup=reply_markup)
    return CHOOSING

# تابع انتخاب بازی
def choose_game(update, context):
    query = update.callback_query
    query.answer()
    game = query.data

    if game == 'chess':
        query.edit_message_text("شطرنج انتخاب شد! (این بخش در حال توسعه است.)")
    elif game == 'xo':
        query.edit_message_text("دوز (XO) انتخاب شد! (این بخش در حال توسعه است.)")
    elif game == 'rps':
        query.edit_message_text("سنگ‌کاغذ‌قیچی انتخاب شد! (این بخش در حال توسعه است.)")
    elif game == 'memory':
        query.edit_message_text("کارت حافظه انتخاب شد! (این بخش در حال توسعه است.)")
    elif game == 'ludo':
        query.edit_message_text("منچ انتخاب شد! (این بخش در حال توسعه است.)")

    return PLAYING

# تابع لغو
def cancel(update, context):
    update.message.reply_text('بازی لغو شد. برای شروع مجدد /start رو بزنید.')
    return ConversationHandler.END

def main():
    token = "7854258519:AAGzL6Vd5ck10h06UPEFpI0jd-wD1G4_rrc"
    updater = Updater(token, use_context=True)

    # مدیریت گفتگو (Conversation Handler)
    conv_handler = ConversationHandler(
        entry_points=[CommandHandler('start', start)],
        states={
            CHOOSING: [CallbackQueryHandler(choose_game)],
            PLAYING: [MessageHandler(Filters.text, cancel)]  # این بخش رو می‌تونید برای هر بازی گسترش بدید
        },
        fallbacks=[CommandHandler('cancel', cancel)]
    )

    dispatcher = updater.dispatcher
    dispatcher.add_handler(conv_handler)

    updater.start_polling()
    updater.idle()

if __name__ == "__main__":
    main()