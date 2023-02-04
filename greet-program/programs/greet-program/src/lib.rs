use anchor_lang::prelude::*;

declare_id!("6fmK5BV525XzSMK8kpPE76Rqb5XuxKG666Qmx7Za9nsN");

#[event]
pub struct GreetEvent {
    pub name: String,
    pub sender: Pubkey,
}

#[program]
pub mod greet_program {
    use super::*;

    pub fn greet(ctx: Context<Greet>, name: String) -> Result<()> {
        let sender = &ctx.accounts.sender;

        msg!("Hello {}!", name);
        msg!("Your address is {}", sender.key());

        emit!(GreetEvent {
            name,
            sender: sender.key()
        });

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Greet<'info> {
    pub sender: Signer<'info>,
}
